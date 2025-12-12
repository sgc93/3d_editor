export const getSvg = (type: string, isSelected: boolean) => {
  switch (type) {
    case "box":
    case "mesh":
      return `
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-3.5 h-3.5 transition-all duration-300 ${
                  isSelected
                    ? "stroke-accent-1"
                    : "stroke-n-100 group-hover:stroke-accent-1"
                }"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z"
                />
                <path d="M12 22v-10" />
                <path d="M12 12l8.73 -5.04" />
                <path d="M3.27 6.96l8.73 5.04" />
            </svg>
`;
    case "plane":
      return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3.5 h-3.5 transition-all duration-300 ${
                  isSelected
                    ? "stroke-accent-1 fill-accent-1"
                    : "stroke-n-100 group-hover:stroke-accent-1 group-hover:fill-accent-1"
                } "
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z"
                />
              </svg>`;
    case "sphere":
      return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-3.5 h-3.5 transition-all duration-300 ${
                  isSelected
                    ? "stroke-accent-1"
                    : "stroke-n-100 group-hover:stroke-accent-1"
                }"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12c0 1.657 4.03 3 9 3s9 -1.343 9 -3" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              </svg>`;
    case "cylinder":
      return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-3.5 h-3.5 transition-all duration-300 ${
                  isSelected
                    ? "stroke-accent-1"
                    : "stroke-n-100 group-hover:stroke-accent-1"
                }"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
                <path d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" />
              </svg>`;
    case "cone":
      return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3.5 h-3.5 transition-all duration-300 ${
                  isSelected
                    ? "stroke-accent-1 fill-accent-1"
                    : "stroke-n-100 group-hover:stroke-accent-1 group-hover:fill-accent-1"
                }"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 1.001c.72 0 1.385 .387 1.749 1.03l8.13 14.99a1 1 0 0 1 .121 .477v.498c0 2.46 -4.306 3.945 -9.677 4.002l-.323 .002c-5.52 0 -10 -1.495 -10 -4.003v-.5a1 1 0 0 1 .121 -.477l8.139 -15.005a2 2 0 0 1 1.74 -1.015"
                />
              </svg>`;
    case "torus":
      return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-3.5 h-3.5 transition-all duration-300 ${
                  isSelected
                    ? "stroke-accent-1 "
                    : "stroke-n-100 group-hover:stroke-accent-1"
                }"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M3 12c0 -3.314 4.03 -6 9 -6s9 2.686 9 6s-4.03 6 -9 6s-9 -2.686 -9 -6z"
                />
              </svg>`;
    case "text":
      return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-3.5 h-3.5  transition-all duration-300 ${
                  isSelected
                    ? "stroke-accent-1"
                    : "stroke-n-100 group-hover:stroke-accent-1"
                }"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
                <path d="M7 13l10 0" />
              </svg>`;
    default:
      return `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-3.5 h-3.5  transition-all duration-300 ${
                  isSelected
                    ? "stroke-accent-1 fill-accent-1"
                    : "stroke-n-100 group-hover:stroke-accent-1"
                }"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008a2.016 2.016 0 0 0 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718z"
                />
                <path d="M12 22v-10" />
                <path d="M12 12l8.73 -5.04" />
                <path d="M3.27 6.96l8.73 5.04" />
            </svg>`;
  }
};
