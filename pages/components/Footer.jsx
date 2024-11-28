import React from "react";
import Image from "next/image";
import BackToTopButton from "./Button";

const Footer = () => {
  return (
    <>
      <BackToTopButton />
      <div className="fixed z-50 right-6 bottom-5">
        <a
          className="flex justify-center flex-col-reverse items-center"
          target="_blank"
          href="https://wa.me/916268839263">
          <svg
            className="w-10 sm:w-10"
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_16539_385)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M512 382.07C512 384.87 511.91 390.95 511.74 395.65C511.33 407.14 510.42 421.97 509.04 428.72C507.199 438.329 504.081 447.648 499.77 456.43C490.288 475.153 475.071 490.355 456.34 499.82C447.506 504.143 438.132 507.264 428.47 509.1C421.78 510.45 407.06 511.34 395.65 511.75C390.94 511.92 384.86 512 382.07 512H129.97C127.17 512 121.09 511.91 116.39 511.74C104.9 511.33 90.07 510.42 83.32 509.05C73.7094 507.199 64.3877 504.079 55.6 499.77C36.8621 490.28 21.6484 475.049 12.18 456.3C7.85694 447.466 4.73589 438.092 2.9 428.43C1.55 421.74 0.66 407 0.25 395.61C0.08 390.91 0 384.82 0 382V129.9C0 127.1 0.09 121.02 0.25 116.32C0.71 104.86 1.62 90 3 83.28C4.84742 73.6699 7.96475 64.3482 12.27 55.56C21.7616 36.8469 36.976 21.65 55.7 12.18C64.5343 7.85694 73.9075 4.73589 83.57 2.9C90.26 1.55 105 0.66 116.39 0.25C121.09 0.08 127.18 0 130 0H382.1C384.9 0 390.98 0.09 395.68 0.25C407.14 0.71 422 1.62 428.72 3C438.33 4.84742 447.652 7.96475 456.44 12.27C475.153 21.7616 490.35 36.976 499.82 55.7C504.143 64.5343 507.264 73.9075 509.1 83.57C510.45 90.26 511.34 104.98 511.75 116.39C511.92 121.09 512 127.18 512 129.97V382.07Z"
                fill="url(#paint0_linear_16539_385)"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M379.56 131.67C363.471 115.463 344.322 102.614 323.226 93.8693C302.13 85.1245 279.507 80.6583 256.67 80.7299C161 80.7299 83.05 158.64 83.05 254.42C83.0227 284.895 91.0246 314.84 106.25 341.24L81.6 431.24L173.68 407.07C199.143 420.95 227.679 428.229 256.68 428.24H256.75C352.48 428.24 430.44 350.33 430.44 254.55C430.492 231.725 426.019 209.116 417.281 188.029C408.543 166.943 395.712 147.798 379.53 131.7L379.56 131.67ZM256.72 399C230.85 399.004 205.456 392.048 183.2 378.86L177.91 375.71L123.27 390L137.86 336.73L134.44 331.26C119.934 308.272 112.265 281.632 112.33 254.45C112.33 174.81 177.1 110 256.8 110C275.765 110.002 294.544 113.743 312.063 121.006C329.582 128.27 345.497 138.915 358.9 152.333C372.303 165.75 382.931 181.678 390.175 199.205C397.419 216.732 401.138 235.515 401.12 254.48C401.05 334.15 336.29 398.94 256.71 398.94L256.72 399ZM335.87 290.8C331.55 288.6 310.19 278.13 306.22 276.68C302.25 275.23 299.37 274.49 296.42 278.88C293.47 283.27 285.2 292.99 282.66 295.88C280.12 298.77 277.6 299.17 273.29 296.97C268.98 294.77 254.94 290.2 238.37 275.41C225.49 263.91 216.76 249.67 214.22 245.41C211.68 241.15 213.93 238.7 216.14 236.58C218.14 234.65 220.46 231.52 222.65 228.98C224.84 226.44 225.53 224.66 226.97 221.72C228.41 218.78 227.71 216.3 226.62 214.12C225.53 211.94 216.82 190.57 213.28 181.87C209.79 173.36 206.16 174.55 203.49 174.4C200.82 174.25 198.07 174.27 195.2 174.27C193.003 174.329 190.842 174.84 188.852 175.77C186.861 176.701 185.084 178.032 183.63 179.68C179.63 184 168.43 194.54 168.43 215.9C168.43 237.26 183.97 257.9 186.15 260.81C188.33 263.72 216.76 307.57 260.29 326.35C270.63 330.79 278.71 333.46 285.01 335.53C293.863 338.197 303.213 338.783 312.33 337.24C320.68 336.01 338.01 326.75 341.64 316.62C345.27 306.49 345.27 297.79 344.19 296C343.11 294.21 340.28 293 335.9 290.78L335.87 290.8Z"
                fill="white"></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_16539_385"
                x1="254.893"
                y1="0.4244"
                x2="254.893"
                y2="510.206"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="#61FD7D"></stop>
                <stop offset="1" stopColor="#2BB826"></stop>
              </linearGradient>
              <clipPath id="clip0_16539_385">
                <rect width="512" height="512" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <footer className="bg-[#171717] text-white border-t border-white/10">
        <div className="mx-auto lg:max-w-[1300px] space-y-8 px-4 py-10 sm:px-6 lg:space-y-12 lg:px-2">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div>
                <Image
                  src="/images/footerlogo.png"
                  alt="TriggrsWeb Logo"
                  width={100}
                  height={100}
                  className="h-[50px] w-[200px] -mx-5"
                />
              </div>

              <p className="mt-4 max-w-[220px] text-base text-gray-300">
                We build custom websites to elevate your brand and drive growth.
              </p>

              <ul className="mt-8 flex gap-6">
                <li>
                  <a
                    href="https://facebook.com/triggrsweb"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 transition hover:text-white">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/triggrsweb"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 transition hover:text-white">
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/triggrsweb"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 transition hover:text-white">
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://linkedin.com/company/triggrsweb"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-300 transition hover:text-white">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-white">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:text-white">
                      Web Development
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:text-white">
                      API Development
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:text-white">
                      Ecommerce Development
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:text-white">
                      Technology Integration
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:text-white">
                      Backend Development
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-300 transition hover:text-white">
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      href="/insights"
                      className="text-gray-300 transition hover:text-white">
                      Insights
                    </a>
                  </li>

                  <li>
                    <a
                      href="/contact"
                      className="text-gray-300 transition hover:text-white">
                      Customers
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">Support</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-300 transition hover:text-white">
                      Contact Us
                    </a>
                  </li>

                  <li>
                    <a
                      href="/faq"
                      className="text-gray-300 transition hover:text-white">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:text-white">
                      Support Center
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white">Legal</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="/privacy"
                      className="text-gray-300 transition hover:text-white">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="/terms"
                      className="text-gray-300 transition hover:text-white">
                      Terms & Conditions
                    </a>
                  </li>

                  <li>
                    <a
                      href="/cookies"
                      className="text-gray-300 transition hover:text-white">
                      Cookie Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="/sitemap"
                      className="text-gray-300 transition hover:text-white">
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-base mx text-gray-300">
            &copy; {new Date().getFullYear()} TriggrsWeb. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
