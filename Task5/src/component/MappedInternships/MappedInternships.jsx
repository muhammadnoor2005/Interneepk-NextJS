import styles from "./MappedInternships.module.css";
import { useRouter } from "next/router";

export default function({internshipArr}){
    const router = useRouter();

    if(!internshipArr){
        return<>
        loading</>
    }
    const arr = internshipArr.map((i) => {
        const apply = () => {
            if(i.applyURL === ""){
                router.push(`/${i._id}`);
            }else{
                router.push(i.applyURL);
            }
        }
        
        return(
            <div key={i._id} className={styles.singleCard}>
                <div className={styles.imgDiv}>
                    <img src={i.imgURL}/>
                </div>
                
                {/* div having name location duraiton and apply now btn */}
                <div className={styles.detailsDiv}>
                    <h4>{i.name}</h4>

                    {/* loaction and duration div */}
                    <div className={styles.locAndDura}>
                        {/* location and its icon */}
                        <div>
                            <i class="custom-icon bi-geo-alt me-1"></i>
                            <span>{i.location}</span>
                        </div>

                        {/* duraiton and its icon */}
                        <div>
                            <i class="custom-icon bi-clock me-1"></i>
                            <span>{i.duration}</span>
                        </div>
                    </div>
                    
                    {/* apply now button div */}
                    <div className={styles.btnDiv} onClick={apply}>
                        <div>
                            Apply now
                        </div>
                    </div>
                </div>
                
            </div>
        )
    })

    return(
        <div className={styles.mainDiv}>
            {arr}
        </div>
    )
}