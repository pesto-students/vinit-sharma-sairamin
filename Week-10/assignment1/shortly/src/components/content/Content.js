import "./content.css";
import homeimage from "./image/shortly_img.png";

const Content = () => {
  return (
    <div className="main_super_container">
      <div className="main_sub_container_1">
        <div className="sub_container_1_text_wraper">
          <h1>More than just shorter Links</h1>
          <p>
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
        </div>
        <div className="sub_container_1_img_wraper">
          <img src={homeimage} alt="enhance the look" />
        </div>
      </div>
      <div className="main_sub_container_2"></div>
      <div className="main_sub_container_3"></div>
    </div>
  );
};

export default Content;
