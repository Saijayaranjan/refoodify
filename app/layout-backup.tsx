import "../basehub.config";
import "../styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { basehub } from "basehub";
import { Toolbar } from "basehub/next-toolbar";
import { Providers } from "./providers";
import { footerFragment, headerFragment } from "../lib/basehub/fragments";
import { Newsletter } from "./_sections/newsletter";
import { themeFragment } from "../context/basehub-theme-provider";
import { PlaygroundSetupModal } from "../components/playground-notification";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
});

export const dynamic = "force-static";
export const revalidate = 30;

const envs: Record<string, { isValid: boolean; name: string; label: string }> = {};
const _vercel_url_env_name = "VERCEL_URL";
const isMainV0 = process.env[_vercel_url_env_name]?.startsWith("kzmiy8h2e096ozqdihx0");

let allValid = true;
const subscribeEnv = ({
  name,
  label,
  value,
}: {
  name: string;
  label: string;
  value: string | undefined;
}) => {
  const isValid = !!value;
  if (!isValid) {
    allValid = false;
  }
  envs[name] = {
    isValid,
    name,
    label,
  };
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [
    {
      site: { footer, settings, header },
    },
  ] = await Promise.all([
    basehub().query({
      site: {
        settings: {
          theme: themeFragment,
          logo: {
            dark: {
              url: true,
              alt: true,
              width: true,
              height: true,
              aspectRatio: true,
              blurDataURL: true,
            },
            light: {
              url: true,
              alt: true,
              width: true,
              height: true,
              aspectRatio: true,
              blurDataURL: true,
            },
          },
          showUseTemplate: true,
        },
        header: headerFragment,
        footer: footerFragment,
      },
    }),
  ]);

  let playgroundNotification = null;

  subscribeEnv({
    name: "BASEHUB_TOKEN",
    label: "BaseHub Read Token",
    value: process.env.BASEHUB_TOKEN,
  });

  if (!isMainV0 && !allValid && process.env.NODE_ENV !== "production") {
    const playgroundData = await basehub().query({
      _sys: {
        playgroundInfo: {
          expiresAt: true,
          editUrl: true,
          claimUrl: true,
        },
      },
    });

    if (playgroundData._sys.playgroundInfo) {
      playgroundNotification = (
        <PlaygroundSetupModal playgroundInfo={playgroundData._sys.playgroundInfo} envs={envs} />
      );
    }
  }

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-[--surface-primary] text-[--text-primary] dark:bg-[--dark-surface-primary] dark:text-[--dark-text-primary] ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <Providers theme={settings.theme}>
          {!isMainV0 && <Toolbar />}
          {playgroundNotification}
          {/* Header */}
          <Header logo={settings.logo} header={header} />
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <Newsletter newsletter={footer.newsletter} />
          {/* Footer */}
          <Footer footer={footer} logo={settings.logo} />
        </Providers>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Refoodify - Make Money with Waste",
  description: "AI-powered food waste management system that transforms leftovers into valuable resources through smart reuse ideas, nutritional insights, and composting tips.",
  generator: "Team Git Happens",
};
