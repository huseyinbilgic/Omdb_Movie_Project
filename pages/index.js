const { default: Navi } = require("../components/navi/Navi");

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import MainPage from "../components/home/MainPage";

function Home() {
  return (
    <div>
      <Navi></Navi>
      <MainPage></MainPage>

      <style jsx global>
        {`
          .ortabutton {
            color: rgb(119, 90, 90);
          }
          .welcome {
            background-image: url("images/sarib.png");
          }
          .entermovienavi {
            border: none;
            background: #f3f3f3;
          }
          .ibutton {
            border: none;
            background-color: #f3f3f3;
          }
          .ibutton i {
            color: #a4a4a4;
          }
          .welcome-text {
            font-weight: 500;
            font-size: 65px;
          }

          .welcome-div {
            font-family: Poppins;
            font-style: normal;
            color: #ffffff;
            padding-top: 127px;
          }

          .welcome-subtext {
            width: 70%;
            font-size: 16px;
            margin-bottom: 100px;
          }

          .routes-link {
            padding-left: 85px;
          }

          .entermovienaviflex {
            display: inline-flex;
          }

          .searchForm {
            padding: 20px;
            background-color: white;
            border-radius: 10px;

            box-shadow: 0px 16px 28px rgba(141, 40, 173, 0.15);
          }

          .entermovie {
            background: #f3f3f3;
            border-radius: 8px;
          }

          .info {
            margin-top: 150px;
            margin-bottom: 80px;
          }

          .popularmovies {
            font-family: Poppins;
            font-style: normal;

            font-size: 35px;

            color: #000000;
            float: left;
          }

          .viewmore {
            font-family: Poppins;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;

            /* identical to box height */
            text-align: right;

            color: #f5c518;
          }
        `}
      </style>
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossOrigin="anonymous"
      ></script>

      <script src="https://bootstraptema.ru/plugins/jquery/jquery-1.11.3.min.js"></script>
    </div>
  );
}
export default Home;
