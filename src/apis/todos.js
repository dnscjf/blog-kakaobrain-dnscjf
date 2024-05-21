import axios from "axios";
import { SERVER_URL } from "./config";

// 전체 목록 가져오기
// BE 연동은 비동기이기 때문에 성공이든 에러든 시간이 걸린다.
// 언제 결과가 올지 모름
// axios를 사용하면 기본형(순서)을 지켜서 코딩할 것

const API_URL = `${SERVER_URL}/todos`;

// 4단계
export const getTodos = async () => {
  // 1단계
  try {
    // 3단계
    // 5단계 : 하고 싶은 일 작성
    // axios.get( 주소 );
    // 자료 수집
    const response = await axios.get(API_URL);
    // console.log(response);
    // console.log(response.data);
    // console.log(response.status);
    const status = response.status.toString();
    const statusResult = status.charAt(0);
    if (statusResult === "2") {
      console.log("정상적 처리");
      // 호출한 곳으로 자료를 돌려준다.
      return response.data;
    } else {
      console.log("예외적 처리");
    }
  } catch (error) {
    // 2단계
    console.log(error);
    alert(error.message);
  }
};
// 1개의 목록만 가져오기
// 4단계
export const getOneTodos = async id => {
  // 1단계
  try {
    // 3단계
    // 5단계 : 하고 싶은 일 작성
    const response = await axios.get(`${API_URL}/${id}`);
    const status = response.status.toString();
    const statusResult = status.charAt(0);
    if (statusResult === "2") {
      console.log("정상적 처리");
      console.log(response.data);
      // 호출한 곳으로 자료를 돌려준다.
      return response.data;
    } else {
      console.log("예외적 처리");
    }
  } catch (error) {
    // 2단계
    console.log(error);
    alert(error);
  }
};
// 글 등록하기
export const postTodos = () => {};
// 글 삭제하기
export const deleteTodos = () => {};
// 글 수정하기
export const putTodos = () => {};
