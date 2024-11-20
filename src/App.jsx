import { useState, useEffect } from "react";
import { Pinterest } from "@pengoose/pinterest";
import Card from "./components/Pinterest/Card";
import Fallback from "./components/Pinterest/Fallback";

function App() {
  const [data, setData] = useState(null); // api 호출 후 데이터
  const [loaded, setLoaded] = useState(false); // 이미지 로딩 상태 체크

  useEffect(() => {
    const fetchBoardPins = async () => {
      try {
        const pinterest = new Pinterest({
          id: "khp23370033",
          boardIds: ["example"],
        });
        const boardPins = await pinterest.getMyBoard("example");
        setData(boardPins);
        console.log("보드 핀을 성공적으로 가지고 왔습니다.");
        console.log(boardPins);

        // 애니메이션을 위한 상태 업데이트
        setTimeout(() => {
          setLoaded(true); // 로드 완료 후 애니메이션 실행
        }, 100); // 약간의 지연시간을 주어 자연스러운 애니메이션 효과
      } catch (error) {
        console.error("보드 핀을 가져오는 중에 오류가 발생했습니다.", error);
      }
    };
    fetchBoardPins();
  }, []);

  return (
    <div className="wrapper">
      {data && data.pins ? (
        data.pins.map((item, index) => (
          <Card
            key={index}
            detail={item}
            loaded={loaded} // 로딩 상태 전달
          />
        ))
      ) : (
        <Fallback />
      )}
    </div>
  );
}

export default App;
