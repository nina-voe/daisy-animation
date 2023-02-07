import { useState, useRef } from 'react';
import { motion, Variants } from 'framer-motion';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const mainRef = useRef(null);
  return (
    <motion.main ref={mainRef} className="main">
      <div className="flower-wrapper">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
          >
            <g fill="#fff" fill-rule="evenodd">
              <motion.path
                id={'firstLeaf'}
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('firstLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m168.56 173.1c-12.721-17.047-24.04-35.242-37.714-51.512-12.554-9.2403-20.95-26.537-36.443-30.085-9.3169-0.78082-24.368-9.2254-20.81 6.6581 1.4123 13.722 12.903 25.648 22.061 35.763 9.5945 10.272 19.853 19.931 32.155 26.889 11.6 7.733 23.199 15.466 34.799 23.199 6.6115 0.13103 6.6311-6.1075 5.9523-10.913z"
              />
              <motion.path
                id="nineteen"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('nineteen');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m169.55 172.11c13.127 5.4884 11.532-17.075 6.7523-24.112-5.9871-17.63-11.718-35.348-18.068-52.853-8.8813-10.475-14.027-25.02-25.923-32.296-8.166-6.4667-24.569-14.84-22.275 2.959-4.7342 13.441 4.1292 26.256 8.9971 38.357 5.6164 11.411 16.053 18.856 22.553 29.68l27.963 38.265z"
              />
              <motion.path
                id="eighteen"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('eighteen');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m179.78 162.69c8.7615 11.054 7.1337-12.303 10.406-17.067 3.1742-12.992 8.0206-25.944 5.3254-39.44-1.045-16.896-1.9741-33.922-7.3887-50.098-2.6334-8.0983-13.102-22.262-19.071-9.374-8.6594 7.8508-9.2198 20.615-10.253 31.53-2.9333 14.317 3.1517 27.423 7.63 40.657 4.4104 13.995 10.241 27.77 13.351 42.038v1.7532z"
              />
              <motion.path
                id="seventeenLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('seventeenLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m186.79 161.99c5.4937 10.959 20.626 7.2675 24.389-3.1891 14.298-17.143 27.938-34.83 39.689-53.829 6.5279-7.5449 8.6093-17.127 10.557-26.615 3.2446-8.3719-0.70456-21.608-5.3444-25.906-7.8634 2.4445-15.105-4.8962-20.47 4.8584-10.507 8.5983-17.744 20.654-24.528 32.202-8.3901 18.351-16.489 36.961-20.113 56.94-1.3377 5.1942-2.8461 10.342-4.1799 15.538z"
              />
              <motion.path
                id="sixteenLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('sixteenLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m207.84 166.9c-6.1081 11.713 6.3533 14.448 15.144 11.463 15.23-9.213 30.71-18.21 43.701-30.54 10.992-8.7718 17.385-21.644 26.162-32.399 6.3991-8.9506 8.7999-19.937 13.202-29.898-13.753-4.9402-26.212-0.67984-37.818 7.0795-12.081 6.5471-21.606 17.208-28.015 29.262-10.167 12.88-21.327 24.987-30.473 38.69l-1.9026 6.3421z"
              />
              <motion.path
                id="fifteenLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('fifteenLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m221.17 178.82c-10.443 1.504-6.5659 14.024 3.0288 8.8575 15.292-1.5019 30.718-2.4573 45.958 0.079468 14.062-0.5737 29.164 0.76625 41.991-5.8133 11.868-4.1047 22.914-11.915 29.614-22.38 0.57147-11.328-18.538-5.6671-26.48-9.4959-11.457-0.71927-20.288 10.5-31.998 11.274-20.868 5.2714-40.962 13.298-62.114 17.478z"
              />
              <motion.path
                id="fourteenLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('fourteenLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m223.27 178.82c22.229-4.6036 43.434-12.807 64.802-20.178 15.65-3.7324 28.284-14.04 40.423-24.016 2.5342-8.6051 7.6354-18.29-5.4014-18.439-11.72-1.3914-23.752 4.7186-33.974 10.228-11.999 2.9419-12.932 16.616-22.863 22.241-13.359 11.411-28.265 20.656-42.986 30.164z"
              />
              <motion.path
                id="thirteenLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('thirteenLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m214.85 188.64c18-1.2967 36.055-5.1724 54.028-1.4958 16.414 2.0413 32.81 6.0912 46.827 15.213 8.1007 2.0844 27.005 14.857 10.859 19.516-8.7425 4.6906-19.186 3.9566-28.766 5.0282-20.075-2.5223-40.298-4.9311-59.671-11.096-10.711-3.2994-22.695-6.9524-30.139-15.632-3.5412-5.5977 3.8053-8.2378 6.8624-11.532z"
              />
              <motion.path
                id="twelveLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('twelveLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m301.84 228.63c9.8761 6.3847 20.156 28.197 2.5813 29.784-14.113 0.58951-29.26-0.29361-41.043-8.9796-17.688-10.438-37.986-18.391-50.808-35.131-6.4804-9.2319 4.4674-11.916 9.9008-4.5682 12.821 6.6217 27.497 8.5015 41.474 11.916 12.656 2.1951 25.269 4.6178 37.895 6.9781z"
              />
              <motion.path
                id="elevenLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('elevenLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m280.09 257.39c8.2671 9.003 16.164 27.597 6.1245 35.852-12.5-1.5846-29.364-1.7865-34.676-15.762-4.6148-11.925-7.9588-24.737-16.876-34.371-5.538-8.2416-17.63-23.189-19.96-26.596 7.3416 8.4701 16.045 15.49 26.26 20.161 11.738 6.3713 22.874 14.137 34.907 19.777 1.4069 0.31265 2.8138 0.62534 4.2207 0.93796z"
              />
              <motion.path
                id="tenLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('tenLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m253.44 281.94c-1.8581 13.854 2.6 20.916-4.173 28.282-12.627 3.0595-21.86-9.195-29.112-17.686-8.0623-14.437-17.626-28.271-21.776-44.512-3.1371-9.8992-5.2627-20.653-5.2918-30.791 10.439-11.954 24.105 0.002991 29.688 10.501 8.6126 11.841 19.503 21.017 24.239 36.643 4.7359 15.626 8.2838 3.709 6.4257 17.564z"
              />
              <motion.path
                id="nineLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('nineLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m234.49 307.2c1.5911 9.5855-3.3905 29.062-16.171 22.716-12.728-0.67664-13.592-16.984-19.832-25.594-2.8081-9.0456-5.6262-18.888-5.471-28.342 2.7422-9.3511 4.1271-19.315 4.5474-28.821 5.2197 16.849 14.448 32.057 23.869 46.823 3.9453 4.7977 8.9368 8.5842 13.057 13.218z"
              />
              <motion.path
                id="eightLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('eightLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m197.32 244.06c-2.2594 16.234-3.8527 32.826-11.371 47.7-5.5496 12.341-12.718 28.524-25.637 32.874-11.807 2.8716-12.614-17.366-14.092-25.521 1.035-16.093 1.6423-33.205 10.716-47.162 5.9096-11.666 11.516-23.487 17.235-35.249 10.949-5.6175 20.615 1.1118 19.837 13.003 1.1042 4.7851 2.2085 9.5701 3.3127 14.355z"
              />
              <motion.path
                id="sevenLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('sevenLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m174.17 215.3c-12.286 23.954-20.975 50.318-39.593 70.412-7.0098 8.9297-18.308 12.484-27.049 19.38-14.878 3.0561-11.32-13.884-7.5024-22.15 2.6146-10.627 7.0325-21.031 13.58-29.754 11.54-5.4256 23.046-11.435 31.995-20.792 8.8402-4.5245 18.686-21.753 28.57-17.096z"
              />
              <motion.path
                id="sixthLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('sixthLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m169.96 211.79c-13.154 11.223-25.358 23.571-39.233 33.937-18.535 7.4537-37.03 16.867-57.526 16.506-6.6072 0.51141-18.779 0.48074-10.228-8.698 4.7008-12.223 15.303-20.748 25.303-28.629 10.985-7.004 21.443-15.211 34.263-18.619 11.31-5.3579 23.918-7.2335 36.256-7.3532 4.9894 2.1449 9.8308 7.486 11.166 12.857z"
              />
              <motion.path
                id="fourthLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('fourthLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m71.748 238.45c-12.567 1.5194-31.62 1.1232-39.247-8.6327 5.9745-8.2787 16.308-14.644 25.409-19.928 14.429-5.6168 28.888-11.451 44.391-13.314 14.26-2.1968 28.807-4.2687 43.131-4.6944 9.5145-3.279 15.769 9.7956 2.7738 6.9347-12.411-0.046585-24.161 5.736-34.967 11.228-15.292 7.3455-28.624 17.483-41.491 28.406z"
              />
              <motion.path
                id="thirdLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('thirdLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m92.793 197.76c-10.007-0.52542-20.201-1.0759-29.143-6.109-10.112-3.8693-19.153-10.161-27.562-16.753-6.0457-12.756 15.614-15.869 24.656-14.357 16.555-0.36792 33.103 0.69215 49.586 2.1445 16.396 8.0294 33.84 14.414 48.61 25.362 3.5282 12.026-15.253 1.4245-22.354 4.7682-14.748-0.28563-29.234 3.0082-43.794 4.9443z"
              />
              <motion.path
                id="secondLeaf"
                drag
                dragConstraints={mainRef}
                onDragEnd={(event, info) => {
                  const el = document.getElementById('secondLeaf');
                  setTimeout(() => {
                    el.style.opacity = '0';
                  }, 500);
                }}
                d="m86.479 159.88c-10.981-6.3834-23.916-10.378-31.619-21.107-5.9025-4.547-17.159-23.559-2.766-21.882 11.985 4.2838 31.447-5.0747 35.845 9.908 8.5868 9.8899 17.717 19.967 28.749 27.272 15.094 9.4123 30.042 19.093 44.852 28.958-0.42955 13.502-14.441-5.2714-21.266-5.8475-12.824-4.0337-23.44-14.786-36.988-15.501-5.6295-0.26712-11.272-0.69389-16.806-1.8011z"
              />
            </g>
            <circle cx="187" cy="191" r="38.078" fill="#ffa" />
          </g>
        </svg>
      </div>
    </motion.main>
  );
}
