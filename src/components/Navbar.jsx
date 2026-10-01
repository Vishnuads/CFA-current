// import React, { useState, useRef, useEffect } from 'react'
// import Logo from '../assets/Logo1.png'
// import { Link } from 'react-router'
// import { Menu, X, ChevronDown } from 'lucide-react'

// const courseItems = [
//     { name: 'Direction', link: '/direction' },
//     { name: 'Cinematography', link: '/cinematography' },
//     { name: 'Editing', link: '/courses/cfa-level-3' },
//     { name: 'Visual Effects', link: 'https://vfx.cinemafactoryacademy.com/', tar: '_blank' },
//     { name: 'Virtual Production', link: '/courses/frm-part-2' },
//     { name: 'Acting', link: '/courses/financial-modeling' },
//     { name: 'Photography', link: '/courses/financial-modeling' },
//     { name: 'DI', link: '/courses/financial-modeling' },
// ]

// const menu = [
//     { name: 'Home', link: '/' },
//     { name: 'Courses', link: null, dropdown: courseItems },
//     { name: 'Mentors', link: '/mentor' },
//     { name: 'Workshops', link: '/workshops' },
//     { name: 'Global Recognition', link: '/global-recognition' },
//     { name: 'Books', link: '/books' },
//     // { name: 'Contact', link: '/contact' },
// ]

// const Navbar = () => {
//     const [mobileOpen, setMobileOpen] = useState(false)
//     const [coursesOpen, setCoursesOpen] = useState(false)
//     const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
//     const [scrolled, setScrolled] = useState(false)
//     const dropdownRef = useRef(null)

//     useEffect(() => {
//         const handler = (e) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//                 setCoursesOpen(false)
//             }
//         }
//         document.addEventListener('mousedown', handler)
//         return () => document.removeEventListener('mousedown', handler)
//     }, [])

//     useEffect(() => {
//         document.body.style.overflow = mobileOpen ? 'hidden' : ''
//         return () => { document.body.style.overflow = '' }
//     }, [mobileOpen])

//     useEffect(() => {
//         const onScroll = () => setScrolled(window.scrollY > 12)
//         window.addEventListener('scroll', onScroll)
//         return () => window.removeEventListener('scroll', onScroll)
//     }, [])

//     return (
//         <>
        
//             <nav className={` hidden md:flex fixed top-0 left-0 right-0 z-50 text-sm transition-all duration-300
//                     ${scrolled ? 'bg-black/70 backdrop-blur-xl py-4' : 'bg-transparent py-6'} `} >
                        
//                 <div className='flex items-center justify-between max-w-6xl mx-auto w-full px-6'>
//                     {/* Logo — left */}
//                     <Link to='/' className='shrink-0'>
//                         <img src={Logo} alt='CFA-Logo' className='h-11 w-auto' />
//                     </Link>

//                     {/* Links + CTA — right */}
//                     <div className='flex items-center gap-8 font-onest text-white'>
//                         {menu.map((m, idx) =>
//                             m.dropdown ? (
//                                 <div key={idx} className='relative' ref={dropdownRef}>
//                                     <button
//                                         onMouseEnter={() => setCoursesOpen(true)}
//                                         onClick={() => setCoursesOpen(v => !v)}
//                                         className='group cursor-pointer relative flex items-center gap-1 py-2'
//                                     >
//                                         {m.name}
//                                         <ChevronDown
//                                             size={14}
//                                             className={`transition-transform duration-300 ${coursesOpen ? 'rotate-180' : ''}`}
//                                         />
//                                         <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-[#ffac26] transition-all duration-300 group-hover:w-full' />
//                                     </button>

//                                     <div
//                                         onMouseLeave={() => setCoursesOpen(false)}
//                                         className={`
//                                             absolute top-full right-0 mt-3 w-52
//                                             bg-[#000000b8] backdrop-blur-xl border border-white/20
//                                             rounded-2xl shadow-xl overflow-hidden p-2
//                                             transition-all duration-300 origin-top-right
//                                             ${coursesOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}
//                                         `}
//                                     >
//                                         {courseItems.map((c, i) => (
//                                             <Link
//                                                 key={i}
//                                                 to={c.link}
//                                                 target={c.tar}
//                                                 onClick={() => setCoursesOpen(false)}
//                                                 className='block px-4 py-2 rounded-md text-sm hover:bg-white/10 transition-colors'
//                                             >
//                                                 {c.name}
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <Link key={idx} to={m.link} className='group relative py-2 whitespace-nowrap'>
//                                     {m.name}
//                                     <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-[#ffac26] transition-all duration-300 group-hover:w-full' />
//                                 </Link>
//                             )
//                         )}

//                         <Link to='/apply-now'>
//                             <button className='text-grayy cursor-pointer px-5 py-2 rounded-3xl hover:scale-105 transition-all duration-300 whitespace-nowrap'>
//                                 Apply Now
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </nav>

//             {/* ── MOBILE NAVBAR — logo left, hamburger right ── */}
//             <nav className='md:hidden fixed top-0 left-0 right-0 z-50'>
//                 <div
//                     className={`
//                         flex items-center justify-between px-5 py-4 transition-colors duration-300
//                         ${scrolled || mobileOpen ? 'bg-black/70 backdrop-blur-xl' : 'bg-transparent'}
//                     `}
//                 >
//                     <Link to='/' onClick={() => setMobileOpen(false)}>
//                         <img src={Logo} alt='CFA-Logo' className='h-9 w-auto' />
//                     </Link>
//                     <button
//                         onClick={() => setMobileOpen(v => !v)}
//                         className='relative z-[60] p-2 rounded-xl bg-white/10 border border-white/20 transition-colors hover:bg-white/20'
//                         aria-label='Toggle menu'
//                     >
//                         {mobileOpen
//                             ? <X size={20} className='text-white' />
//                             : <Menu size={20} className='text-white' />
//                         }
//                     </button>
//                 </div>

//                 {/* Backdrop */}
//                 <div
//                     onClick={() => setMobileOpen(false)}
//                     className={`
//                         fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300
//                         ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
//                     `}
//                 />

//                 {/* ── Slide-in drawer from the right ── */}
//                 <div
//                     className={`
//                         fixed top-0 right-0 h-full w-[82%] max-w-sm
//                         bg-[#000000b8] backdrop-blur-xl border-l border-white/10
//                         transition-transform duration-400 ease-in-out
//                         ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
//                     `}
//                 >
//                     <div className='flex items-center justify-between px-5 py-4 border-b border-white/10'>
//                         <img src={Logo} alt='CFA-Logo' className='h-8 w-auto' />
//                         <button
//                             onClick={() => setMobileOpen(false)}
//                             className='p-2 rounded-xl bg-white/10 border border-white/20'
//                             aria-label='Close menu'
//                         >
//                             <X size={18} className='text-white' />
//                         </button>
//                     </div>

//                     <div className='flex flex-col gap-1 px-5 py-6 font-onest overflow-y-auto h-[calc(100%-140px)]'>
//                         {menu.map((m, idx) =>
//                             m.dropdown ? (
//                                 <div key={idx}>
//                                     <button
//                                         onClick={() => setMobileCoursesOpen(v => !v)}
//                                         className='w-full flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/10 transition-colors text-white'
//                                     >
//                                         <span>{m.name}</span>
//                                         <ChevronDown
//                                             size={16}
//                                             className={`transition-transform duration-300 ${mobileCoursesOpen ? 'rotate-180' : ''}`}
//                                         />
//                                     </button>

//                                     <div className={`
//                                         overflow-hidden transition-all duration-300 ease-in-out
//                                         ${mobileCoursesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
//                                     `}>
//                                         <div className='ml-3 mt-1 flex flex-col gap-1 border-l border-white/20 pl-4'>
//                                             {courseItems.map((c, i) => (
//                                                 <Link
//                                                     key={i}
//                                                     to={c.link}
//                                                     target={c.tar}
//                                                     onClick={() => setMobileOpen(false)}
//                                                     className='py-2 px-3 text-sm rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white'
//                                                 >
//                                                     {c.name}
//                                                 </Link>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ) : (
//                                 <Link
//                                     key={idx}
//                                     to={m.link}
//                                     onClick={() => setMobileOpen(false)}
//                                     className='py-3 px-3 rounded-xl hover:bg-white/10 transition-colors text-white block'
//                                 >
//                                     {m.name}
//                                 </Link>
//                             )
//                         )}
//                     </div>

//                     <div className='absolute bottom-0 left-0 right-0 px-5 py-5 border-t border-white/10'>
//                         <Link to='/apply-now' onClick={() => setMobileOpen(false)}>
//                             <button className='cta-btn w-full py-3 cursor-pointer rounded-3xl text-center'>
//                                 Apply Now
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar





import React, { useState, useRef, useEffect } from 'react'
import Logo from '../assets/Logo1.png'
import { Link } from 'react-router'
import { Menu, X, ChevronDown } from 'lucide-react'

const courseItems = [
    { name: 'Direction', link: '/direction' },
    { name: 'Cinematography', link: '/cinematography' },
    { name: 'Editing & DI', link: '/editing' },
    // { name: 'Visual Effects', link: 'https://vfx.cinemafactoryacademy.com/', tar: '_blank' },
    { name: 'Stage Unreal Virtual Production', link: '/stage-unreal_virtual-production' },
    { name: 'Advance Virtual Production' , link: '/advanced-virtual-production'},
    { name: 'Acting', link: '/acting' },
    { name: 'Photography', link: '/photography' },
    // { name: 'DI', link: '/di' },
]

const menu = [
    { name: 'Home', link: '/' },
    { name: 'Courses', link: null, dropdown: courseItems },
    { name: 'Mentors', link: '/mentor' },
    { name: 'Workshops', link: '/workshops' },
    { name: 'Global Recognition', link: '/global-recognition' },
    { name: 'Books', link: '/books' },
    { name: 'Events', link: '/events' },
    { name: 'Placements', link: '/placements' },
    // { name: 'Contact', link: '/contact' },
]

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [coursesOpen, setCoursesOpen] = useState(false)
    const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [navHidden, setNavHidden] = useState(false)
    const dropdownRef = useRef(null)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setCoursesOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    // Force the mobile bar to be visible whenever the drawer is open,
    // so the close/hamburger button is never hidden off-screen.
    useEffect(() => {
        if (mobileOpen) setNavHidden(false)
    }, [mobileOpen])

    useEffect(() => {
        lastScrollY.current = window.scrollY

        const onScroll = () => {
            const currentY = window.scrollY
            const diff = currentY - lastScrollY.current

            setScrolled(currentY > 12)

            // Don't hide the nav while the mobile drawer is open
            if (mobileOpen) {
                lastScrollY.current = currentY
                return
            }

            // Always show near the top of the page
            if (currentY < 80) {
                setNavHidden(false)
            } else if (diff > 4) {
                // scrolling down
                setNavHidden(true)
                setCoursesOpen(false)
            } else if (diff < -4) {
                // scrolling up
                setNavHidden(false)
            }

            lastScrollY.current = currentY
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [mobileOpen])

    return (
        <>

            <nav
                className={`
                    hidden md:flex fixed top-0 left-0 right-0 z-50 text-sm
                    transition-all duration-500 ease-in-out
                    ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'}
                    ${navHidden ? '-translate-y-full' : 'translate-y-0'}
                `}
            >

                <div className='flex items-center justify-between max-w-6xl mx-auto w-full px-4'>
                    {/* Logo — left */}
                    <Link to='/' className='shrink-0'>
                        <img src={Logo} alt='CFA-Logo' className='h-11 w-auto' />
                    </Link>

                    {/* Links + CTA — right */}
                    <div className='flex items-center gap-5 font-onest text-white'>
                        {menu.map((m, idx) =>
                            m.dropdown ? (
                                <div key={idx} className='relative' ref={dropdownRef}>
                                    <button
                                        onMouseEnter={() => setCoursesOpen(true)}
                                        onClick={() => setCoursesOpen(v => !v)}
                                        className='group cursor-pointer relative flex items-center gap-1 py-2'
                                    >
                                        {m.name}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-300 ${coursesOpen ? 'rotate-180' : ''}`}
                                        />
                                        <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-[#ffac26] transition-all duration-300 group-hover:w-full' />
                                    </button>

                                    <div
                                        onMouseLeave={() => setCoursesOpen(false)}
                                        className={`
                                            absolute top-full right-0 mt-3 w-64
                                            bg-[#000000] backdrop-blur-xl border border-white/20
                                            rounded-2xl shadow-xl overflow-hidden p-2
                                            transition-all duration-300 origin-top-right
                                            ${coursesOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}
                                        `}
                                    >
                                        {courseItems.map((c, i) => (
                                            <Link
                                                key={i}
                                                to={c.link}
                                                target={c.tar}
                                                onClick={() => setCoursesOpen(false)}
                                                className='block px-3 py-2 hover:text-[#ffac26] hover:scale-105 rounded-md text-sm hover:bg-white/10 transition-all'
                                            >
                                                {c.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link key={idx} to={m.link} className='group hover:text-[#ffac26] relative py-2 whitespace-nowrap'>
                                    {m.name}
                                    <span className='absolute -bottom-0.5 left-0 h-px w-0 bg-[#ffac26] transition-all duration-300 group-hover:w-full' />
                                </Link>
                            )
                        )}

                        <Link to='/apply-now'>
                            <button className='text-grayy cursor-pointer px-5 py-2 rounded-3xl hover:scale-105 hover:bg-[#ffac26] hover:text-black transition-all duration-300 whitespace-nowrap'>
                                Apply Now
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* ── MOBILE TOP BAR — logo left, hamburger right ── */}
            {/* NOTE: this is the ONLY element that gets the hide/show transform.
                The backdrop + drawer live outside of it below, as plain fixed
                siblings, so they always align to the real viewport instead of
                being repositioned by this element's transform. */}
            <nav
                className={`
                    md:hidden fixed top-0 left-0 right-0 z-50
                    transition-transform duration-500 ease-in-out
                    ${navHidden ? '-translate-y-full' : 'translate-y-0'}
                `}
            >
                <div
                    className={`
                        flex items-center justify-between px-5 py-4 transition-colors duration-300
                        ${scrolled || mobileOpen ? 'bg-black/70 backdrop-blur-xl' : 'bg-transparent'}
                    `}
                >
                    <Link to='/' onClick={() => setMobileOpen(false)}>
                        <img src={Logo} alt='CFA-Logo' className='h-9 w-auto' />
                    </Link>
                    <button
                        onClick={() => setMobileOpen(v => !v)}
                        className='relative z-[60] p-2 rounded-xl bg-white/10 border border-white/20 transition-colors hover:bg-white/20'
                        aria-label='Toggle menu'
                    >
                        {mobileOpen
                            ? <X size={20} className='text-white' />
                            : <Menu size={20} className='text-white' />
                        }
                    </button>
                </div>
            </nav>

            {/* ── Backdrop — plain fixed sibling, always viewport-aligned ── */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`
                    md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
                    ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
            />

            {/* ── Slide-in drawer from the right — plain fixed sibling ── */}
            <div
                className={`
                    md:hidden fixed top-0 right-0 h-full w-[82%] max-w-sm z-50
                    bg-[#000000b8] backdrop-blur-xl border-l border-white/10
                    transition-transform duration-400 ease-in-out
                    ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className='flex items-center justify-between px-5 py-4 border-b border-white/10'>
                    <img src={Logo} alt='CFA-Logo' className='h-8 w-auto' />
                    <button
                        onClick={() => setMobileOpen(false)}
                        className='p-2 rounded-xl bg-white/10 border border-white/20'
                        aria-label='Close menu'
                    >
                        <X size={18} className='text-white' />
                    </button>
                </div>

                <div className='flex flex-col gap-1 px-5 py-6 font-onest overflow-y-auto h-[calc(100%-140px)]'>
                    {menu.map((m, idx) =>
                        m.dropdown ? (
                            <div key={idx}>
                                <button
                                    onClick={() => setMobileCoursesOpen(v => !v)}
                                    className='w-full flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/10 transition-colors text-white'
                                >
                                    <span>{m.name}</span>
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform duration-300 ${mobileCoursesOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <div className={`
                                    overflow-hidden transition-all duration-300 ease-in-out
                                    ${mobileCoursesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                `}>
                                    <div className='ml-3 mt-1 flex flex-col gap-1 border-l border-white/20 pl-4'>
                                        {courseItems.map((c, i) => (
                                            <Link
                                                key={i}
                                                to={c.link}
                                                target={c.tar}
                                                onClick={() => setMobileOpen(false)}
                                                className='py-2 px-3 text-sm rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white'
                                            >
                                                {c.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={idx}
                                to={m.link}
                                onClick={() => setMobileOpen(false)}
                                className='py-3 px-3 rounded-xl hover:bg-white/10 transition-colors text-white block'
                            >
                                {m.name}
                            </Link>
                        )
                    )}
                </div>

                <div className='absolute bottom-0 left-0 right-0 px-5 py-5 border-t border-white/10'>
                    <Link to='/apply-now' onClick={() => setMobileOpen(false)}>
                        <button className='text-grayy w-full py-3 cursor-pointer rounded-3xl text-center'>
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar