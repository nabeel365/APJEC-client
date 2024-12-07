import React from 'react';
import { Outlet } from 'react-router-dom';
import TopSlider from '../HomePage/TopSlider';
import CustomerReview from '../HomePage/CustomerReview';
import PopularClasses from '../HomePage/PopularClasses';
import PopularInstructors from '../HomePage/PopularInstructors';
import { Fade, Reveal, Roll, Slide, Zoom } from 'react-awesome-reveal';
import NoticeSection from '../Notice/NoticeSection';
import TeamPage from '../Team/TeamPage';
import Testimonials from '../Testimonials/Testimonials';
import CurrentAffairsList from '../CurrentAffairs/CurrentAffairsList';
import FAQ from '../FAQ/FAQ';
import NoticeModal from '../Notice/NoticeModal';
import ThreeCards from '../HomePage/ThreeCards';

const Layout = () => {
    return (
        <div>
            <br />

            <Slide direction="left">



            <TopSlider>
                
                </TopSlider> 

            </Slide>

            <NoticeModal></NoticeModal> 


<br />
            
            
            <NoticeSection></NoticeSection>

            




            <Fade duration={2000} >
            {/* <PopularInstructors></PopularInstructors> */}

            </Fade>

<br />
            {/* <CurrentAffairsList></CurrentAffairsList> */}

<ThreeCards></ThreeCards>



           <TeamPage></TeamPage>

           <br></br>

           <Testimonials></Testimonials>

<FAQ></FAQ>

        </div>
    );
};

export default Layout;