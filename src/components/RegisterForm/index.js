import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { DefaultValidator, LengthValidator, ValidatorType } from "../../validator"

export default function RegisterForm() {
  const [data, setData] = useState({});
  const Validate = () => {

  };
  return (
    <>
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div className="wrapper wrapper--w680">
          <Card className="card card-4">
            <Card.Body className="card-body">
              <Card.Title className="title">Đăng ký</Card.Title>
              <Form>
                <div className="row row-space">
                  <div className="col-2">
                    <Form.Group className="input-group">
                      <Form.Label className="label">Họ tên</Form.Label>
                      <Form.Control
                        type="text"
                        className="input--style-4"
                        value={data.name}
                        onChange={e => setData({ ...data, name: e.target.value })}
                      />
                      <p>{new LengthValidator("Invalid length, must be 7-9 character", 7, 9).validate(data.name || "")}</p>
                    </Form.Group>
                  </div>
                  <div className="col-2">
                    <Form.Group className="input-group">
                      <Form.Label className="label">Email</Form.Label>
                      <Form.Control
                        type="email"
                        className="input--style-4"
                        placeholder="Nhập Email"
                        value={data.email}
                        onChange={e => setData({ ...data, email: e.target.value })}
                      />
                      <p>{DefaultValidator.getInstance(ValidatorType.EMAIL).validate(data.email || "")}</p>
                    </Form.Group>
                  </div>
                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <Form.Group className="input-group">
                      <Form.Label className="label">Birthday</Form.Label>
                      <div className="input-group-icon">
                        <Form.Control
                          value={data.date}
                          onChange={(e) => setData({ ...data, date: e.target.value })}
                        />
                      </div>
                      <p>{DefaultValidator.getInstance(ValidatorType.DATE).validate(data.date || "")}</p>
                    </Form.Group>
                  </div>
                  <div className="col-2">
                    <Form.Group className="input-group">
                      <Form.Label className="label">Phone Number</Form.Label>
                      <div className="input-group-icon">
                      <Form.Control type="text" value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })} />
                      </div>
                    <p>{DefaultValidator.getInstance(ValidatorType.PHONE).validate(data.phone || "")}</p>
                    </Form.Group>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
