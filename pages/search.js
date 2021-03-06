import Navi from "../components/navi/Navi";
import Search from "../components/search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useRouter } from "next/router";
function search() {
  const router = useRouter();

  return (
    <div>
      <Navi></Navi>
      <Search movie={router.query}></Search>
      <style jsx global>
        {`
          .welcome {
            background-image: url("images/sarib.png");
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
          }

          .routes-link {
            padding-left: 85px;
          }

          .searchForm {
            padding: 20px;
            background-color: white;
            border-radius: 10px;

            box-shadow: 0px 16px 28px rgba(141, 40, 173, 0.15);
          }

          .imdbfoto {
            display: inline-block;
          }
          .entermovie {
            background: #f3f3f3;
            border-radius: 8px;
          }
          .entermovienavi {
            border: none;
            background: #f3f3f3;
          }
          .ibutton {
            border: none;
            background-color: #f3f3f3;
          }
          .entermovienaviflex {
            display: inline-flex;
          }
          .ibutton i {
            color: #a4a4a4;
          }
          .ortabutton {
            color: rgb(119, 90, 90);
          }
          .poster {
            width: 100%;
            border-radius: 10px;
          }
          .heartsymbol {
            margin-top: 25%;
            font-size: x-large;
          }

          .routeinfo {
            height: 77px;
            left: calc(50% - 1920px / 2);
            top: 128px;
            text-align: start;

            background: linear-gradient(
              90deg,
              rgba(245, 197, 24, 0.26) 22.24%,
              rgba(251, 247, 252, 0) 100%
            );
          }

          .home {
            padding-top: 30px;
          }

          .homeyazi {
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 30px;

            /* identical to box height, or 167% */

            color: #f5c518;
          }

          .searchresult {
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 30px;

            /* identical to box height, or 167% */

            color: #000000;
          }

          .searchResult {
            font-family: Poppins;
            font-style: normal;
            font-weight: 600;
            font-size: 45px;
          }

          .filmfoto {
            position: relative;
            text-align: center;
          }

          .filmbottomleft {
            position: absolute;
            bottom: 8px;
            left: 16px;

            background: #f5c518;
            border-radius: 10px;
            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
          }

          .filmbottomright {
            border-radius: 50%;
            background: #ffffff;
            width: 41px;
            height: 41px;

            background-color: white;
            position: absolute;
            bottom: 8px;
            right: 16px;
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
export default search;
