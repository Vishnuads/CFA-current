import React from 'react'
import Logo from '../assets/Logo1.png'
import { Link } from 'react-router'
import { Mail, MapPin, Phone } from 'lucide-react'
import FooterImg from '@/assets/CINEMA.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaThreads, FaXTwitter, FaYoutube } from "react-icons/fa6";
import CFJ from "../assets/cfj.webp"
import CFS from "../assets/cfs.webp"
import CFE from "../assets/cfe.webp"
import CFE1 from "../assets/cfe1.webp"

const Footer = () => {

    const QL = [
        { name: "Home", link: "/" },
        { name: "Events", link: "/events" },
        { name: "Books", link: "/books" },
        { name: "Global Recognition", link: "/global-recognition" },
        { name: "Workshops", link: "/workshops" },
        { name: "Contact", link: "/contact" },
    ]

    const course = [
        { name: 'Direction', link: '/direction' },
        { name: 'Cinematography', link: '/cinematography' },
        { name: 'Editing & DI', link: '/editing' },
        { name: 'Stage Unreal Virtual Production', link: '/stage-unreal_virtual-production' },
        { name: 'Advance Virtual Production', link: '/advanced-virtual-production' },
        { name: 'Acting', link: '/acting' },
        { name: 'Photography', link: '/photography' },
    ]

    return (
        <>
            <footer className='relative px-5 pt-10 bg-[#050505]'>
                {/* <div className="absolute inset-0  hidden md:block">
                    <img src={FooterImg} alt="footer-bg" className=' ' />
                </div> */}
                <div className='max-w-6xl mx-auto'>
                    <div className="grid md:grid-cols-6 grid-cols-1 gap-4 font-onest">
                        <div className="col-span-2">
                            <img src={Logo} alt="CFA Logo" className='h-12 w-auto mb-5' />
                            <p className=' text-sec text-sm px-2'>At Cinema Factory Academy, we are committed to helping you turn your passion into a career</p>

                            <div className="mt-5">
                                <p className='uppercase tracking-wide text-gray text-sm font-semibold'>other verticals</p>
                                <div className="flex items-center gap-3 mt-3">
                                    {[{ link: 'https://cinemafactoryentertaiment.com', img: CFE, },
                                    { link: 'https://www.cinemafactoryjuniors.com', img: CFJ }
                                    ].map((l, idx) => (
                                        <Link key={idx} to={l.link} target='_blank'>
                                            <img src={l.img} alt="other-logos" className='h-12 w-auto hover:scale-110 transition-all duration-400' />
                                        </Link>
                                    ))}
                                    <img src={CFS} alt="other-logos" className='h-12 w-auto hover:scale-110 transition-all duration-400' />

                                </div>
                            </div>

                            <div className="mt-5">
                                <p className='uppercase tracking-wide text-gray text-sm font-semibold'>Social</p>
                                <div className="flex items-center gap-3 py-3">
                                    <Link
                                        to="https://www.instagram.com/cinema_factory_academy/"
                                        target="_blank"
                                        className='text-grayy p-2.5 hover:bg-[#ffac26] hover:text-black group hover:-translate-y-2 transition-all duration-300'>
                                        <FaInstagram size={20} className='' />
                                    </Link>
                                    <Link
                                        to="https://www.facebook.com/profile.php?id=61559751436051"
                                        target='_blank'
                                        className='text-grayy p-2.5 hover:bg-[#ffac26] hover:text-black group hover:-translate-y-2 transition-all duration-300'>
                                        <FaFacebook size={20} />
                                    </Link>

                                    <Link
                                        to="https://www.youtube.com/@CinemafactoryFilmAcademy"
                                        target="_blank"
                                        className='text-grayy p-2.5 hover:bg-[#ffac26] hover:text-black group hover:-translate-y-2 transition-all duration-300'>
                                        <FaYoutube size={20} />
                                    </Link>

                                    <Link
                                        to="https://www.linkedin.com/company/cinemafactoryacademy/"
                                        target="_blank"
                                        className='text-grayy p-2.5 hover:bg-[#ffac26] hover:text-black group hover:-translate-y-2 transition-all duration-300'>
                                        <FaLinkedin size={20} />
                                    </Link>

                                    <Link
                                        to="https://x.com/CF_academy2024?t=50Xz_jo1R8-TMc3gVJnwwQ&s=09"
                                        target="_blank" className='text-grayy p-2.5 hover:bg-[#ffac26] hover:text-black group hover:-translate-y-2 transition-all duration-300'>
                                        <FaXTwitter size={20} />
                                    </Link>

                                    <Link
                                        to="https://www.threads.net/@cinema_factory_academy"
                                        target="_blank" className='text-grayy p-2.5 hover:bg-[#ffac26] hover:text-black group hover:-translate-y-2 transition-all duration-300'>
                                        <FaThreads size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <div className='hidden md:block'></div> */}
                        <div className='space-y-2'>
                            <h1 className='font-semibold'>Quick Links</h1>
                            {QL.map((q, idx) => (
                                <p key={idx} className='text-sec text-sm'> <Link to={q.link} >{q.name}</Link></p>
                            ))}
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-semibold'>Courses</h1>
                            {course.map((c, idx) => (
                                <p key={idx} className='text-sec text-sm '> <Link to={c.link} className='hover:text-[#ffac26]' >{c.name}</Link></p>
                            ))}
                        </div>
                        <div className="col-span-2 space-y-3">
                            <h1 className='font-semibold'>Contact Us</h1>
                            <div>
                                <div className="flex items-center text-sm mb-1 text-gray gap-3">
                                    <MapPin size={18} className='text-gray' />
                                    <p>Academy Address</p>
                                </div>
                                <p className='text-sec px-6 text-sm '>No.271A, 3rd Floor, Maan Sarovar Tower, Scheme Road, Teynampet, Chennai - 600018, India</p>
                            </div>
                            <div>
                                <div className="flex items-center mb-1 text-sm text-gray gap-3">
                                    <MapPin size={18} className='text-gray' />
                                    <p>Office Address</p>
                                </div>
                                <p className='text-sec px-6 text-sm '>103/9, 5th floor David's tower, 4th Avenue, Kodambakkam, Chennai 600024</p>
                            </div>
                            <div className="flex text-[15px] text-wrap items-center text-sec gap-3">
                                <Mail size={18} className='text-gray' />
                                <p>operations@cinemafactory.co.in</p>
                            </div>
                            <div className="flex text-sm items-center text-sec gap-3">
                                <Phone size={18} className='text-gray' />
                                <p>+91 9884683888</p>
                            </div>
                            <div className="flex text-sm  items-center text-sec gap-3">
                                <Phone size={18} className='text-gray' />
                                <p>+91 9345309632</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className='hidden md:flex items-center pt-15 gap-6 font-akira text-[90px]'>
                        <h1 className='text-white' > JOIN AND </h1>
                        <p className='tracking-wide text-gray'> <TextRotate
                            texts={[
                                "act",
                                "edit",
                                "create",
                                "build",
                                "direct",
                                "shoot",
                                "Grade",
                                "Click"
                            ]} /></p>
                    </div> */}
                    <hr className='my-3 md:hidden block' />

                    <div className="flex flex-col md:flex-row text-sm md:items-center items-start md:justify-between gap-2 md:gap-0 pt-12">
                        <p className='  mx-auto md:m-0  '>
                            Copyright &copy; All Rights Reserved
                        </p>
                        <div className="flex  flex-wrap mx-auto md:m-0 md:p-0 pb-2 items-start md:items-center gap-x-5 gap-y-1">
                            <Link to='/terms' className='hover:underline'> Terms of use</Link>
                            <Link to='/privacy' className='hover:underline'> Privacy</Link>
                            <Link to='/cancel' className='hover:underline'> Cancellation </Link>
                        </div>
                    </div>

                </div>
                <img src={FooterImg} alt="footer-bg" className=' ' />

            </footer>
        </>
    )
}

export default Footer
