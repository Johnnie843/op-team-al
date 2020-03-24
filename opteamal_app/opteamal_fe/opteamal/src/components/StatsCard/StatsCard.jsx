
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class StatsCard extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <Row>
            <Col xs={12}>
              <div className="numbers">
                <p>{this.props.statsText}</p>
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              {this.props.statsValue}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StatsCard;
