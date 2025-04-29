
import React from 'react'
import { Background, Logo } from '../../assets/images'
import Opening from '../pages/Opening'
import Workshops from '../pages/Workshops'
import Interviews from '../pages/Interviews'
import { Link } from 'react-router-dom'
import Imgp from './Imgp'
import { Laravel,Tuple,Statamic,Statickit,Mirag,Transistor1 } from '../../assets/images'


const Aceuil = () => {
    
  return (
    <>
        <main>
            <div  >
                <div className='bg mb-30'>
                    <div>
                        <h1 className='text-sky-500 p-4 ml-60 text-8xl mr-50 '>A design conference for the dark side.</h1>
                        <p className='text-sky-800 p-4 ml-50 mr-50 text-4xl p-4 '>The next generation of web users are tech-savvy and suspicious. They know how to use dev tools, they can detect a phishing scam from a mile away, and they certainly aren’t accepting any checks from Western Union.
                            At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected.</p>
                    </div>        
                    <div className='flex p-4 ml-80 mr-30 gap-20'>
                        <div>
                            <h3 className='text-sky-500'>Speaker</h3>
                            <h2 className='text-sky-900 text-4xl'>18</h2>
                        </div>
                        <div>
                            <h3  className='text-sky-500' >People Attending</h3>
                            <h2 className='text-sky-900 text-4xl'>2,092</h2>
                        </div>
                        <div>
                            <h3  className='text-sky-500'>Venue</h3>
                            <h2 className='text-sky-900 text-4xl'>Staples Center</h2>
                        </div>
                        <div>
                            <h3  className='text-sky-500'>Location</h3>
                            <h2 className='text-sky-800 text-4xl'>Los Angeles</h2>
                                    
                        </div>
                    </div>
                </div>
                <div>
                    <h1><strong className='text-sky-500 ml-6 text-5xl'>Speakers</strong></h1>
                    <p className='text-sky-800 text-3xl ml-7'>Learn from the experts on the cutting-edge of deception at the most sinister companies.</p>
                </div>
                <div className='p-6'>
                    <section >
                        <Imgp/>

                    </section> 
                </div>
                <div className=' lg:mx-0 lg:pr-24 p-6'>
                    <h1 className='text-sky-600  text-5xl  mb-7 mt-7'>Our three day schedule is jam-packed with brilliant, creative, evil geniuses.</h1>
                    <p className='text-sky-900 text-3xl mb-30'>The worst people in our industry giving the best talks you’ve ever seen. Nothing will be recorded and every attendee has to sign an NDA to watch the talks.</p>

                </div>
                <div  className='presentation flex gap-15   items-center p-4'>
                    <div className='ml-7    '>
                        <div className=' '>
                            <h2 className='text-sky-800  text-2xl ml-10'>April 4</h2>
                            <p className='text-sky-900 mt-1.5'>The first day of the conference is focused on dark patterns for ecommerce.</p>
                        </div>
                        <div className='space-y-12 py-14 text-center px-5 bg-white/60 backdrop-blur-sm'>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Steven McHail</h2>
                                <h3 className='text-sky-900'>Not so one-time payments</h3>
                                <h4>9:00AM - 10:00AM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Jaquelin Isch</h2>
                                <h3 className='text-sky-900'>The finer print</h3>
                                <h4>10:00AM - 11:00AM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Dianne Guilianelli</h2>
                                <h3  className='text-sky-900'>Post-purchase blackmail</h3>
                                <h4>11:00AM - 12:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Lunch</h2>
                                <h4>12:00PM - 1:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Ronni Cantadore</h2>
                                <h3 className='text-sky-900'>Buy or die</h3>
                                <h4>1:00PM - 2:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Erhart Cockrin</h2>
                                <h3 className='text-sky-900'>In-person cancellation</h3>
                                <h4>2:00PM - 3:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Parker Johnson</h2>
                                <h3 className='text-sky-900'>The pay/cancel switcheroo</h3>
                                <h4>3:00PM - 4:00PM PST</h4>
                            </section>
                        </div>
                    </div>
                    <div>
                        <div className='title'>
                            <h2 className='text-sky-800 text-2xl ml-10'>April 5</h2>
                            <p className='text-sky-900 mt-1.5'>Next we spend the day talking about deceiving people with technology.</p>
                        </div>
                        <div className='space-y-12 py-14 text-center px-10 bg-white/60 backdrop-blur-sm'>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Damaris Kimura</h2>
                                <h3 className='text-sky-900'>The invisible card reader</h3>
                                <h4>9:00AM - 10:00AM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Ibrahim Frasch</h2>
                                <h3 className='text-sky-900'>Stealing fingerprints</h3>
                                <h4>10:00AM - 11:00AM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Cathlene Burrage</h2>
                                <h3 className='text-sky-900'>Voting machines</h3>
                                <h4>11:00AM - 12:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Lunch</h2>
                                <h4>12:00PM - 1:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Rinaldo Beynon</h2>
                                <h3 className='text-sky-900'>Blackhat SEO that works</h3>
                                <h4>1:00PM - 2:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Waylon Hyden</h2>
                                <h3 className='text-sky-900'>Turning your audience into a botnet</h3>
                                <h4>2:00PM - 3:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Giordano Sagucio</h2>
                                <h3 className='text-sky-900'>Fly phishing</h3>
                                <h4>3:00PM - 4:00PM PST</h4>
                            </section>
                        </div>
                    </div>
                    <div>
                        <div className='title'>
                            <h2 className='text-sky-800 text-3xl ml-10'>April 6</h2>
                            <p className='text-sky-900 mt-1.5'>We close out the event previewing new techniques that are still in development.</p>
                        </div>
                        <div className='space-y-12 py-14 text-center px-5 bg-white/60 backdrop-blur-sm'>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Andrew Greene</h2>
                                <h3 className='text-sky-900'>Neuralink dark patterns</h3>
                                <h4>9:00AM - 10:00AM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Heather Terry</h2>
                                <h3 className='text-sky-900'>DALL-E for passports</h3>
                                <h4>10:00AM - 11:00AM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Piers Wilkins</h2>
                                <h3 className='text-sky-900'>Quantum password cracking</h3>
                                <h4>11:00AM - 12:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Lunch</h2>
                                <h4>12:00PM - 1:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Gordon Sanderson</h2>
                                <h3 className='text-sky-900'>SkyNet is coming</h3>
                                <h4>1:00PM - 2:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Kimberly Parsons</h2>
                                <h3 className='text-sky-900'>Dark patterns for the metaverse</h3>
                                <h4>2:00PM - 3:00PM PST</h4>
                            </section>
                            <section>
                                <h2 className='text-sky-900 text-2xl'>Richard Astley</h2>
                                <h3 className='text-sky-900'>Knowing the game and playing it</h3>
                                <h4>3:00PM - 4:00PM PST</h4>
                            </section>
                        </div>
                    </div>
                </div>
                <div className='sponsorship'>
                    <h1 className='text-4xl p-10 text-center text-sky-600 font-medium'>Current sponsorships for our 
                        workshops and speakers.</h1>
                    <div className='grid grid-cols-3 mt-20 mb-20 gap-10 ml-60 mr-20 justify-center '>
                        <img src={Transistor1} alt="" />
                        <img src={Tuple} alt="" />
                        <img src={Statickit} alt="" />
                        <img src={Mirag} alt="" />
                        <img src={Laravel} alt="" />
                        <img src={Statamic} alt="" />
                    </div>
                </div>
                <div className='kh rounded-4xl px-4 py-15 ml-20 mr-20 flex justify-between items-center'>
                    <div className='px-4 py-20' >
                        <h1 className='text-sky-800 text-4xl mb-5 text-center'>Stay up to date</h1>
                        <span>Get updates on all of our events and be the</span> 
                        <span>first to get notified when tickets go on sale.</span>
                    </div>
                    <div className='droite  '>
                        <h3 className='mb-6 text-2xl'>Sign up to our newsletter ↓</h3>
                        <input type="email" required  placeholder='Email adress' className='rounded-2xl bg-stone-50 p-2 width-20 text-gray-700 after:ml-0.5 after:text-red-500'/>
                        <button className='p-2 rounded-2xl bg-sky-500 inline-flex text-stone-50 hover:bg-sky-800'>
                          <span>Sign up today</span>  
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <footer className='py-16  flex  justify-between'>
            <div className=' flex items-center gauche'>
              <img src={Logo} alt="" />
              <h1 className='text-2xl text-slate-900' >DeceptiConf</h1>
            </div>
            <div className='text-slate-500 text-2xl'><p>Copyright © 2025 DeceptiConf, LLC. All rights reserved.</p></div>
        </footer>
    </>
  )
}

export default Aceuil
