import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../Css/Game/Gamemode.css";
import { useParams } from "react-router-dom";
import { useGameModeFetchQuery } from "../../../slices/gameSlice";
const Gamemode = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGameModeFetchQuery(id);
    const gameMode = data?.data?.data || [];
    //console.log(gameMode);
  return (
    <div>
      <div className="gamemodebgcolor">
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <p className="selectgamemodeheading">Select a Gameplay Mode</p>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
        <div className="makescrolsecinmbl">
  <Container className="fullcontainerwidthswt mt-5">
    <Row className="stripmodebg mt-3">
      <Col md={7} xs={5}>
        <p className="gamemodetitle">{gameMode?.modeTitle}(Player vs Machine)</p>
      </Col>
      <Col md={1} xs={2}>
        <p className="timetitlemode">Time</p>
      </Col>
      <Col md={1} xs={2}>
        <p className="timeitselfmode">7 Days</p>
      </Col>
      <Col md={3} xs={3}>
        <div className="setmodebuttonend">
          <Button className="selectmodesubmitbutton" href="/joinleague">
            Select
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
</div>


      </div>
    </div>
  );
};

export default Gamemode;
