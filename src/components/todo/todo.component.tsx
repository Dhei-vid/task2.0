import { TodoMenuBar } from "../menuBar/menu-bar-component";
import GoPro from "../goPro/go-pro.component";
import TaskCardList from "../taskCardList/task-card-list.components";
import "./todo.styles.scss";

const Todo = () => {
  return (
    <div className="todoContainer">
      <TodoMenuBar
        header={"Hello, Jhon"}
        body={"What are your plans for today?"}
        image={
          "https://s3-alpha-sig.figma.com/img/8d27/948a/abd4c5ed04277b73d5eed40ffb200444?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AdbyVm1~VMGdojEsmO6wG5tPLy1ZbDTAi0iNIkQbESFTYaTm4MBBu~K5z40Vd2IH5aqYkFNois~PRpkLt877kDyztVbrO3NzddGLnIdUblOe2USS8tqOkl7k3XyPK7zx7C8qBTteuGlAzFY7GX0DbWq0rDXe3XAsHUK~cUVaRdrlCFxS4I5bbldimgIBH2AyCNS4C-ydurtngIpGEzEZtji18HDwqaRHC5BQJZ7GtmJuiexgPy4bci4j3dnDhksmKFjppunk2C9mF41UO6qjzAVrtAO3JmhFzXa-pGNFJIQcLSiRcgBaDNFA6mFXrpDVwAi3acNsq2QubLtFfNrTpQ__"
        }
      />
      <GoPro />
      <TaskCardList />
    </div>
  );
};

export default Todo;
