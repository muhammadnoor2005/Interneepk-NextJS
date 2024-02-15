import { useEffect, useState } from "react";
import styles from "./internships.module.css";
import axios from "../../axios";
import MappedInternships from "@/component/MappedInternships/MappedInternships";
import Head from "next/head";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import NavSection from "@/component/NavSection/NavSection";

export default function({internshipArr}){

    // this much interships needed
    let sortedInternships;
    if(internshipArr){
         sortedInternships = internshipArr.slice(3,12);
    }

    return(
        <div>

            <Head>
                <title>
                Internee.pk | Job Listing
                </title>
            </Head>

            <Header/>
            <NavSection menu={"Internships listings"} text={"Internships listings"}/>

            <div className={styles.mainDiv}>
                <div className={styles.headingDiv}>
                    <h3>Internships on Different Tech Domain</h3>
                </div>

                <MappedInternships internshipArr={sortedInternships}/>
            </div>

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