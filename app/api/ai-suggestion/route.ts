import { NextRequest, NextResponse } from 'next/server';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { foodItem } = body;

    console.log('=== AI Suggestion API Called ===');
    console.log('Food item:', foodItem);

    if (!foodItem) {
      return NextResponse.json({ error: 'Food item is required' }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'AI service temporarily unavailable' }, { status: 503 });
    }

    const prompt = `You are a food waste reduction expert. For the food item "${foodItem}", provide a comprehensive, structured response in this exact format:

${foodItem.charAt(0).toUpperCase() + foodItem.slice(1)}: Smart Food Waste Insights

### 1. Useful Ways to Reuse ${foodItem.charAt(0).toUpperCase() + foodItem.slice(1)}

• *[Method 1]:* [Detailed explanation]
• *[Method 2]:* [Detailed explanation]  
• *[Method 3]:* [Detailed explanation]
• *[Method 4]:* [Detailed explanation]

### 2. Minerals and Nutrients in ${foodItem.charAt(0).toUpperCase() + foodItem.slice(1)}

| Mineral/Nutrient | Benefit for You |
|------------------|-----------------|
| [Nutrient 1] | [Health benefit] |
| [Nutrient 2] | [Health benefit] |
| [Nutrient 3] | [Health benefit] |
| [Nutrient 4] | [Health benefit] |
| [Nutrient 5] | [Health benefit] |

### 3. Composting Guidance

• *Compost Value:* [Explanation of composting benefits]
• *Best Plants Benefiting from ${foodItem.charAt(0).toUpperCase() + foodItem.slice(1)} Compost:*
  - [Plant 1]
  - [Plant 2] 
  - [Plant 3]
  - [Plant 4]

*Tip:* [Specific composting tip for this food item]

### 4. Your Eco Score

• *+1 point* for logging ${foodItem} waste.
• *+1 bonus* if you choose a reuse method.
• *Leaderboard:* Check your monthly score to see your eco-impact grow!

Thank you for making a positive environmental impact by reusing and composting ${foodItem}!

Keep the format exactly as shown with proper markdown formatting, bullet points, and table structure.`;

    console.log('Making request to Gemini API...');
    const response = await fetch(`${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      }),
    });

    console.log('Gemini API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Gemini API error: ${response.status} ${response.statusText}`);
      console.error('Error response:', errorText);
      return NextResponse.json({ error: 'AI service error' }, { status: 500 });
    }

    const data = await response.json();
    const suggestion = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!suggestion) {
      console.error('No suggestion in Gemini response');
      return NextResponse.json({ error: 'AI service error' }, { status: 500 });
    }

    console.log('Returning AI suggestion');
    return NextResponse.json({ suggestion: suggestion.trim() });
  } catch (error) {
    console.error('Error in AI suggestion API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
