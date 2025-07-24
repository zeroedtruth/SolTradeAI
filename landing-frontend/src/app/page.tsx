import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";
import { Github, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <Header />
      <main className="row-start-2 pb-6">
        <section className="bg-gray-100 dark:bg-gray-900 relative w-full">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative min-h-[80vh] z-1 pt-[100px] pb-[100px] lg:pt-32 lg:pb-32 flex items-center">
              {/* Left side - Text content */}
              <div className="max-w-[85%] lg:max-w-[50%]">
                <h1 className="text-5xl font-bold text-black dark:text-white pb-4 aos-init aos-animate"
                    data-aos="fade-down">
                  AI-Powered DeFi Trading Agent
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 aos-init aos-animate"
                   data-aos="fade-down"
                   data-aos-delay="200">
                  Optimize your DeFi trading with advanced AI models, real-time data feeds, and automated strategies on the Monad blockchain.
                </p>
                <div className="flex flex-col sm:flex-row gap-4"
                     data-aos="fade-down"
                     data-aos-delay="400">
                  <Link
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
                    href="https://monetai.monadai.xyz/"
                  >
                    Launch App
                  </Link>
                  <Link
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    href="https://github.com/MonadAI-xyz/monetai"
                  >
                    <Github className="mr-2" />
                    View on GitHub
                  </Link>
                </div>
              </div>

              {/* Right side - Animated graphics */}
              <div className="hidden lg:block lg:w-[50%] relative">
                {/* Add trading chart or dashboard mockup here */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl -z-10"></div>
                <div className="relative">
                  <div className="relative animate-float shadow-2xl rounded-lg overflow-hidden">
                    <Image
                      src="/images/mockuper.png"
                      alt="MonetAI Trading Dashboard"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-gray-600 dark:text-gray-400">
                MonetAI combines AI, automation, and DeFi expertise to deliver a comprehensive trading solution
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Trading</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Integrates predictive analytics and sentiment analysis to optimize trading decisions in real-time.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Portfolio Management</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Automated risk management, asset rebalancing, and yield maximization strategies.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">DAO Governance</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Token holders can propose and vote on changes to risk management and trading strategies.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Real-Time Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Live market data feeds and automated trade insights for informed decision-making.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Multi-Chain Ready</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Built for expansion to multiple chains while leveraging Monads high-performance infrastructure.
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Automated Trading</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Set up automated trading strategies that execute trades based on predefined conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Get started with MonetAI in just a few simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect your Web3 Monad Native wallet to get started.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Fund Account</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Load your account with tokens on the Monad chain.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Configure AI</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Set your trading preferences and risk parameters.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                <h3 className="text-xl font-semibold mb-2">Start Trading</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Let the AI agent trade autonomously on your behalf.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Join the future of AI-powered DeFi trading on Monad
              </p>
              <Link
                href="https://monetai.monadai.xyz/"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors text-lg"
              >
                Launch MonetAI
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
                © 2024 MonetAI. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="https://twitter.com/MonetAI_xyz"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary"
                >
                  <Twitter />
                </Link>
                <Link
                  href="https://github.com/MonadAI-xyz/monetai"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary"
                >
                  <Github />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
