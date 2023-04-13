import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { State, Time, Title } from "./ListItem";
import { Category, ConvertKorean, Status } from "@/types";
import { MAIN, formDate } from "@/types";
import { GrView } from "react-icons/gr";
import StatusBtn from "../utils/StatusBtn";

const ListCardItem = ({ item }: { item: MAIN }) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <TitleWrapper>
        <Time>마감일: {formDate(item.endDate)}</Time>
        <Title>{item.title}</Title>
      </TitleWrapper>
      <Img src="/Logo.svg" alt="로고" />
      <StateWrapper>
        {/* <State color={theme.color.light}>
          {ConvertKorean[item.status.toLowerCase() as Category]}
        </State> */}
        <StatusBtn
          onClick={() => {}}
          status={item.status.toLowerCase() as Status}
        />
        <ViewWrapper>
          <GrView />
          <span style={{ marginLeft: "5px" }}>{item.view}</span>
        </ViewWrapper>
      </StateWrapper>
    </Container>
  );
};

export default ListCardItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 44.5vh;
  padding: 10px 15px;

  border: 1px solid #c3c3c3;
  border-radius: 1rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Img = styled.img`
  width: 100%;
  margin: 20px 0;

  border-radius: 5px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: large;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StateWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ViewWrapper = styled.div`
  display: flex;
  align-items: center;
`;
