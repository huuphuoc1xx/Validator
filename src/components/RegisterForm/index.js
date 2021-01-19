import React, { useState } from "react";
import { Button, Card, Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RegisterForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <Card className="card card-4">
            <Card.Body className="card-body">
              <Card.Title className="title">Đăng ký</Card.Title>
              <Form method="POST">
                <div className="row row-space">
                  <div className="col-2">
                    <Form.Group className="input-group">
                      <Form.Label className="label">Họ tên</Form.Label>
                      <Form.Control
                        type="text"
                        className="input--style-4"
                        placeholder="Nhập họ tên"
                      />
                    </Form.Group>
                  </div>
                  <div className="col-2">
                    <Form.Group className="input-group">
                      <Form.Label className="label">Email</Form.Label>
                      <Form.Control
                        type="email"
                        className="input--style-4"
                        placeholder="Nhập Email"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <Form.Group className="input-group">
                      <Form.Label className="label">Birthday</Form.Label>
                      <div className="input-group-icon">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                      </div>
                    </Form.Group>
                  </div>
                  <div className="col-2">
                    <Form.Group className="input-group">
                      <Form.Label className="label">Phone Number</Form.Label>
                      <Form.Control className="input--style-4" type="phone" name="phone" placeholder="Nhập vào số điện thoại" />
                    </Form.Group>
                  </div>
                </div>
                <div className="p-t-15">
                  <Button
                    variant="primary"
                    className="btn btn--radius-2 btn--blue"
                    type="submit"
                  >
                    Đăng ký
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
