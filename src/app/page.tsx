// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.tsx</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore the Next.js 13 playground.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{' '}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }

// import { useState } from 'react'
import { Dialog } from "@headlessui/react";
import { FaTimesCircle, FaBars } from "react-icons/fa";
import Image from "next/image";
import {
  FaMusic,
  FaVideo,
  FaMoneyBill,
  FaSubscript,
  FaOpencart,
  FaCrown,
  FaMoneyBillWave,
  FaThumbsUp,
  FaWrench,
  FaCaretDown,
} from "react-icons/fa";
const navigation = [
  { name: "Home", href: "#" },
  { name: "Why us", href: "#" },
  { name: "Features", href: "#" },
  { name: "Team", href: "#" },
  { name: "FAQ", href: "#" },
];

const aims = [
  {
    name: "Selective Subscription",
    description: "Listeners don’t have to pay for music they don’t listen to.",
    icon: FaThumbsUp,
  },
  {
    name: "Transparency",
    description:
      "With the organized calculation and financial summary, artists know how much royalty they get and how it’s calculated through the shared ledger system.",
    icon: FaOpencart,
  },
  {
    name: "More Royalties",
    description:
      "Artists get up to 100% of the royalties made off streaming the music and videos to the customers.",
    icon: FaCrown,
  },
  {
    name: "Instant Compensations",
    description:
      "The music smart contract executes the transactions and immediately credits the artists.",
    icon: FaMoneyBillWave,
  },
  {
    name: "Data Security",
    description: "Artists’ contents are protected from copyright infringement.",
    icon: FaWrench,
  },
  {
    name: "Pre-set royalties for collaborations",
    description:
      "Artists can automatically divide the earnings for a particular song among band members or collaborating artists.",
    icon: FaCaretDown,
  },
];

const features = [
  {
    name: "Join DrameBase as an Artist:",
    description:
      "Upload Music and Videos for streaming. Mint your content as NFT’s. Have Exclusive EP releases. Get funding and donations on projects. Host Virtual Events",
    icon: FaMusic,
  },
  {
    name: "Join DrameBase as a Fan:",
    description:
      "Video Streaming.Music Streaming.Exclusive EP Access. Earn rewards for listening. Pay for Tickets to shows. Buy NFT’s and order in a physical copy",
    icon: FaVideo,
  },
  {
    name: "Token.",
    description: "DrameBase Token (DB)",
    icon: FaMoneyBill,
  },
];

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];
export default function Home() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          {/* <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <FaTimesCircle className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog> */}
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blackring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Read our whitepaper.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              England&apos;s First Decentralized Media Streaming Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Using blockchain technology to distribute media content, directly
              from the creators to the consumers.
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h1 className="font-semibold leading-7 text-indigo-600 text-3xl">
                Why us
              </h1>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {aims.map((aim) => (
                  <div key={aim.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <aim.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      {aim.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {aim.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h1 className="text-3xl font-semibold leading-7 text-indigo-600">
                    Features
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Here is what you get to enjoy as a DrameBase user
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                    {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <Image
                src="/DBTriplets.png"
                alt="Product screenshot"
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>

        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-2xl font-semibold text-center text-indigo-600 capitalize lg:text-3xl">
            Our Team
          </h2>

          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Ahmed Omer</h3>
                <span className="mt-1 font-medium text-black">CEO</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Jane Doe</h3>
                <span className="mt-1 font-medium text-black">Co-founder</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black">Steve Ben</h3>
                <span className="mt-1 font-medium text-black">UI/UX</span>
              </div>
            </div>

            <div className="w-full max-w-xs text-center">
              <img
                className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                alt="avatar"
              />

              <div className="mt-2">
                <h3 className="text-lg font-medium text-black ">
                  Patterson Johnson
                </h3>
                <span className="mt-1 font-medium text-black">
                  Software Engineer
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white">
          <div className="container px-6 py-12 mx-auto">
            <h1 className="text-2xl font-semibold lg:text-3xl text-indigo-600">
              Frequently asked questions.
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg">
                  <FaMusic />
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    What is DrameBase?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    DrameBase is a decentralized media streaming platform. It
                    uses blockchain InterPlanetary File Systems (IPFS)
                    technology to distribute media content.
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg">
                  <FaSubscript />
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    What Problem does DrameBase solve?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    It solves the royalty payment transparency issues and data
                    infringement issues.
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg">
                  <FaMoneyBillWave />
                </div>

                <div>
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    How do I subscribe?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    You can subscribe using your local currency, which the
                    equivalent token will be credited into your fan account.
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg mt-4">
                  <FaTimesCircle />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    Do I need knowledge of blockchain to use DrameBase?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    DrameBase User-Interface will be built such that anyone who
                    can operate a smartphone can use the platform.
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg mt-4">
                  <FaVideo />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    Why is DrameBase better than other traditional streaming
                    platforms?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    DrameBases uses Blockchain, its shared ledger approach,
                    improves the media supply chain, and decreases copyright
                    infringements by adding transparency, security, and control.
                  </p>
                </div>
              </div>

              <div>
                <div className="inline-block p-3 text-white bg-indigo-600 rounded-lg mt-4">
                  <FaThumbsUp />
                </div>

                <div className="mt-2">
                  <h1 className="text-xl font-semibold text-gray-700 text-indigo-600">
                    Can I stream all artists?
                  </h1>

                  <p className="mt-2 text-sm text-black">
                    This is a new technology and access is needed to the artists
                    or record labels. We would start with African artists and
                    later on to the other artists in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
