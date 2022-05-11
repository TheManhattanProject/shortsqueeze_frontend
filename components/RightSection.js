import sectionStyles from "../styles/SectionMain.module.css";
import Image from "next/image";

export default function RightSection() {
  return (
      <div className={sectionStyles.section_img_wrapper}>
          <Image
            src={"/iphone.svg"}
            width="500px"
            height="600px"
            
          />

          <div className={sectionStyles.floater_text_1}>
            <p>AI/ML</p>
          </div>
          <div className={sectionStyles.floater_text_2}>
            <p>Blockchain</p>
          </div>
          <div className={sectionStyles.floater_text_3}>
            <p>Cloud Computing</p>
          </div>
          <div className={sectionStyles.floater_text_4}>
            <p>Mobile Application</p>
          </div>
          <div className={sectionStyles.floater_text_5}>
            <p>Web Dev</p>
          </div>
      </div>
  );
}
