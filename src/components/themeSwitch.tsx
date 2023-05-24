//SwitchTheme.tsx

import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
const SwitchTheme = () => {
	//we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
	const [theme, setTheme] = useLocalStorage("theme", "myDark");

	//toggles the theme
	const toggleTheme = () => {
		setTheme(theme === "myDark" ? "light" : "myDark");
	};

	//modify data-theme attribute on document.body when theme changes
	useEffect(() => {
		const body = document.body;
		body.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<label className='swap swap-rotate'>
			<input
				type='checkbox'
				onClick={toggleTheme}></input>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				className=' swap-on fill-current p-1 md:p-0 w-8 h8 icon icon-tabler icon-tabler-sun'
				viewBox='0 0 24 24'
				stroke-width='2'
				stroke='currentColor'
				fill='none'
				stroke-linecap='round'
				stroke-linejoin='round'>
				<path
					stroke='none'
					d='M0 0h24v24H0z'
					fill='none'></path>
				<path d='M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0'></path>
				<path d='M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7'></path>
			</svg>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='swap-off fill-current p-1 md:p-0 w-8 h8 icon icon-tabler icon-tabler-moon'
				viewBox='0 0 24 24'
				strokeWidth='0'
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'>
				<path
					stroke='none'
					d='M0 0h24v24H0z'
					fill='none'></path>
				<path d='M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z'></path>
			</svg>
		</label>
	);
};

export default SwitchTheme;
