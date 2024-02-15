import Header from "@/component/Header/Header";
import Head from "next/head";
import FeaturedInternships from "@/component/FeaturedInternships/FeaturedInternships";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "../../axios";
import OtherInternships from "@/component/OtherInternships/OtherInternships";
import Footer from "@/component/Footer/Footer";

export default function({internshipArr}){
    const [featuredInternArr,setFeaturedInternArr] = useState();

    const router = useRouter();
    const {applyInternship} = router.query;
    
    useEffect(() => {
        // getting all the arrays and setting it to internShipArr to map it
        // checking to avoid infinite loop

        if(internshipArr){
            const featuredInternship = internshipArr.find(i => i._id === applyInternship);
            setFeaturedInternArr(featuredInternship.branches);
        }
    },[internshipArr]);


  
    return(
        <div>

            <Head>
                <title>
                Internee.pk | Job Details
                </title>
            </Head>
            <Header/>

           <FeaturedInternships arr={featuredInternArr} />
           <OtherInternships arr={internshipArr} id={applyInternship}/>

           <Footer/>
        </div>
    )
} 

export async function getServerSideProps(){
    try {
        const resp = await axios.get("api/internships");
        const data = resp.data;

        return{
            props:{
                internshipArr:data
            }
        }
    } catch (err) {
        console.log(err.message);
    }  
    return{
        props:{}
    }
   
}