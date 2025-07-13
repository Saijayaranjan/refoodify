const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';

export async function getAISuggestionFromPerplexity(foodItem: string): Promise<string> {
  try {
    const response = await fetch(PERPLEXITY_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'system',
            content: `You are an expert in food waste reduction and sustainability. Provide practical, actionable advice for reducing food waste. Focus on:
            1. Creative ways to reuse or repurpose food items
            2. Composting guidance when appropriate
            3. Storage tips to extend shelf life
            4. Simple recipes for transforming waste into valuable items
            5. Environmental impact and benefits
            
            Keep responses concise (2-3 sentences max), practical, and encouraging. Focus on making money from waste when possible.`
          },
          {
            role: 'user',
            content: `I have "${foodItem}" that might go to waste. What are the best ways to reduce waste and potentially make money or value from this food item? Give me specific, actionable suggestions.`
          }
        ],
        temperature: 0.7,
        max_tokens: 150
      }),
    });

    if (!response.ok) {
      throw new Error(`Perplexity API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Consider composting this item or finding creative ways to repurpose it!';
  } catch (error) {
    console.error('Error calling Perplexity API:', error);
    
    // Fallback to local suggestions if API fails
    return getLocalFallbackSuggestion(foodItem);
  }
}

// Fallback suggestions when API is unavailable
function getLocalFallbackSuggestion(foodItem: string): string {
  const suggestions: { [key: string]: string } = {
    'banana peel': 'Perfect for composting! Rich in potassium. Can also be used as plant fertilizer or dried for tea.',
    'banana peels': 'Perfect for composting! Rich in potassium. Can also be used as plant fertilizer or dried for tea.',
    'banana': 'Great for smoothies, banana bread, or freeze for later use. Overripe bananas are sweetest!',
    'apple core': 'Compost it! Apple cores break down quickly and add nutrients to soil.',
    'orange peel': 'Dry for tea, use as natural cleaner, or compost. Great for potpourri too!',
    'potato peels': 'Clean thoroughly and bake into crispy chips, or compost for nutrient-rich soil.',
    'onion scraps': 'Save for making vegetable stock, or compost the outer layers.',
    'carrot tops': 'Make pesto with carrot greens or use in soups. Very nutritious!',
    'lettuce': 'Regrow from stem in water, or use wilted leaves in smoothies.',
    'bread': 'Make breadcrumbs, croutons, or bread pudding. Stale bread has many uses!',
    'rice': 'Perfect for fried rice, rice pudding, or compost if too old.',
    'pasta': 'Great for pasta salads, casseroles, or compost if past its prime.',
    'coffee grounds': 'Excellent for composting! Also great as plant fertilizer or natural deodorizer.',
    'eggshells': 'Crush and add to compost for calcium, or use around plants to deter pests.',
    'vegetable scraps': 'Perfect for making homemade vegetable stock or composting.',
    'fruit peels': 'Most fruit peels can be composted or used for natural cleaning solutions.',
  };

  const lowerFood = foodItem.toLowerCase();
  
  // Check for exact matches first
  if (suggestions[lowerFood]) {
    return suggestions[lowerFood];
  }
  
  // Check for partial matches
  for (const [key, value] of Object.entries(suggestions)) {
    if (lowerFood.includes(key) || key.includes(lowerFood)) {
      return value;
    }
  }
  
  // Default suggestion
  return 'Great choice for waste reduction! Consider composting if edible reuse isn\'t possible, or research creative recipes online.';
}
