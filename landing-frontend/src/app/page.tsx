import Image from "next/image";
import Header from "@/components/header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <Header />
      <main className="row-start-2 pb-6">
        <section className="bg-gray-100 relative w-full">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative min-h-screen z-1 pt-[200px] pb-[200px] lg:pt-72 lg:pb-96 flex items-center">
              {/* Left side - Text content */}
              <div className="max-w-[85%] lg:max-w-[40%]">
                <h1
                  className="text-5xl font-bold text-black pb-4 aos-init aos-animate"
                  data-aos="fade-down"
                >
                  Less stress when sharing expenses on trips.
                </h1>
                <p
                  className="text-lg text-gray-700 mb-8 aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  Keep track of your shared expenses and balances with
                  housemates, trips, groups, friends, and family.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4 aos-init aos-animate"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  <Link
                    className="rounded-4xl text-white bg-[#3BE8B0] hover:bg-[#2dd19f] w-full transition duration-150 ease-in-out group py-3 px-5 font-semibold"
                    href="https://app.solsplitter.com/"
                  >
                    Launch Sol Splitter
                  </Link>
                </div>
              </div>

              {/* Right side - Animated graphics */}
              <div className="hidden lg:flex lg:w-[60%] justify-center items-center relative">
                <div className="relative w-100 h-100">
                  {/* Main SolSplitter image with floating animation */}
                  <div className="relative animate-float w-full h-full">
                    <Image
                      src="/images/SolSplitter.png"
                      alt="SolSplitter app interface"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
                    />
                  </div>

                  {/* Floating expense cards */}
                  <div className="absolute top-2 -left-16 animate-bounce-slow">
                    <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-[#3BE8B0] transform rotate-12">
                      <div className="text-sm font-semibold text-gray-800">Dinner</div>
                      <div className="text-xs text-gray-600">$45.00</div>
                    </div>
                  </div>

                  <div className="absolute top-16 -right-12 animate-bounce-slow-delayed">
                    <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-[#5AD6E6] transform -rotate-6">
                      <div className="text-sm font-semibold text-gray-800">Gas</div>
                      <div className="text-xs text-gray-600">$32.50</div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 -left-8 animate-bounce-slow-delayed-2">
                    <div className="bg-white rounded-lg shadow-lg p-3 border-l-4 border-[#A17CFF] transform rotate-3">
                      <div className="text-sm font-semibold text-gray-800">Hotel</div>
                      <div className="text-xs text-gray-600">$120.00</div>
                    </div>
                  </div>

                  {/* Floating icons */}
                  <div className="absolute top-4 right-4 animate-pulse">
                    <div className="w-12 h-12 bg-[#3BE8B0] rounded-full flex items-center justify-center">
                      <span className="text-white text-lg font-bold">$</span>
                    </div>
                  </div>

                  <div className="absolute top-12 left-4 animate-pulse-delayed">
                    <div className="w-10 h-10 bg-[#5AD6E6] rounded-full flex items-center justify-center">
                      <span className="text-white text-base font-bold">$</span>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-12 animate-pulse">
                    <div className="w-11 h-11 bg-[#A17CFF] rounded-full flex items-center justify-center">
                      <span className="text-white text-base font-bold">$</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-2 animate-pulse-delayed">
                    <div className="w-6 h-6 bg-[#5AD6E6] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="container lg:flex items-center pt-8 pb-16">
          <div className="hidden xl:w-1/12 xl:block" />
          <div className="lg:w-5/12 xl:w-4/12 ">
            <h1 className="text-center text-3xl lg:text-left lg:text-4xl font-bold leading-tight pt-8 lg:pt-0">
              Less stress when sharing expenses on trips.
            </h1>
            <p className="text-lg my-6 max-w-xs">
              Keep track of your shared expenses and balances with housemates,
              trips, groups, friends, and family.
            </p>
          </div>
          <div className="lg:w-7/12 text-center">
            <Image
              className="shadow-xl hover:shadow-2xl transition-all ease-in-out rounded-lg mx-auto"
              src="/images/group-detail.webp"
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div> */}

        <div className="lg:flex lg:flex-wrap">
          <div className="bg-facets w-full text-white pt-8 bg-[#373B3F] lg:h-landing-feature lg:w-1/2">
            <div className="flex flex-col align-center justify-between h-full">
              <div>
                <h1 className="text-2xl text-center font-mont">
                  Track balances
                </h1>
                <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                  Keep track of shared expenses, balances, and who owes who.
                </p>
              </div>
              <Image
                className="mx-auto w-65 lg:w-81"
                src="/images/friends-1.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="bg-facets w-full text-white pt-8 bg-primary h-sm-landing-feature lg:h-landing-feature lg:w-1/2">
            <div className="flex flex-col align-center justify-between h-full">
              <div>
                <h1 className="text-2xl text-center">Organize expenses</h1>
                <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                  Split expenses with any group: trips, housemates, friends, and
                  family.
                </p>
              </div>
              <Image
                className="mx-auto w-65 lg:w-81"
                src="/images/group-1.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="bg-facets w-full text-white pt-8 bg-orange-400 lg:h-landing-feature lg:w-1/2">
            <div className="flex flex-col align-center justify-between h-full">
              <div>
                <h1 className="text-2xl text-center">Add expenses easily</h1>
                <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                  Quickly add expenses on the go before you forget who paid.
                </p>
              </div>
              <Image
                className="mx-auto w-65 lg:w-81"
                src="/images/add-expense-1.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="bg-facets w-full text-white pt-8 bg-[#373B3F] lg:h-landing-feature lg:w-1/2">
            <div className="flex flex-col align-center justify-between h-full">
              <div>
                <h1 className="text-2xl text-center">Pay friends back</h1>
                <p className="text-center block mx-auto px-8 mt-2 text-lg mb-9 max-w-95">
                  Settle up with a friend and record any cash or online payment.
                </p>
              </div>
              <Image
                className="mx-auto w-65 lg:w-81"
                src="/images/settle-up-1.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>

          <div className="bg-facets w-full text-white pt-8 h-landing-feature bg-secondary flex-col lg:flex-row flex justify-between lg:flex">
            <div className="lg:w-1/2">
              <div className="lg:flex lg:flex-col lg:justify-center lg:h-full">
                <h1 className="text-2xl text-center">Get even more with PRO</h1>
                <p className="text-center block mt-2 text-lg mb-6 max-w-95 mx-auto">
                  Get even more organized with receipt scanning, charts and
                  graphs, currency conversion, and more!
                </p>
                <div className="flex justify-center  mb-4">
                  <Link
                    className="mx-auto px-10 py-3 border border-white shadow text-white font-mont font-semibold rounded"
                    href="https://app.solsplitter.com/"
                  >
                    Launch
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="lg:flex lg:flex-col lg:justify-end lg:h-full">
                <Image
                  className="w-65 lg:w-81 mx-auto"
                  src="/images/details-1.png"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="text-center mt-10 text-2xl lg:text-4xl lg:mb-12 lg:mt-24 font-bold">
            The whole nine yards
          </h1>
          <ul className="feature-list columns-2 md:columns-3 text-sm mt-4 mx-auto">
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Add groups and friends</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Split expenses, record debts</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Equal or unequal splits</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Split by % or shares</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Calculate total balances</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Simplify debts</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Recurring expenses</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Offline mode</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Cloud sync</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Spending totals</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Categorize expenses</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>7+ languages</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>100+ currencies</span>
              </div>
            </li>
            <li>
              <div>
                <i className="core-icon"></i>
                <span>Payment integrations</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Unlimited expenses</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Transaction import</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Currency conversion</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Receipt scanning</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Itemization</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Charts and graphs</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Expense search</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Save default splits</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>A totally ad-free experience</span>
              </div>
            </li>
            <li>
              <div>
                <i className="pro-icon"></i>
                <span>Early access to new features</span>
              </div>
            </li>
          </ul>
          <div className="flex items-center justify-center text-xs mt-8">
            <i className="core-icon"></i>
            <span className="ml-1 mr-6 text-charcoal lg:text-xl">
              Core features
            </span>
            {/* <i className="pro-icon"></i>
            <span className="ml-2 text-purple-light lg:text-xl">
              Pro features
            </span> */}
          </div>
        </div>
      </main>
    </div>
  );
}
