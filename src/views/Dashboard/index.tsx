import * as React from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Card, Button, Table, InputGroupAddon, InputGroupText, Input, InputGroup, Label, FormGroup } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { observable, action } from 'mobx';
import Pdf from "react-to-pdf";
const ref = React.createRef<HTMLDivElement>();

export const timeOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
};

export const payFrequency = "Monthly";

@observer
class Dashboard extends React.Component<{}> {
    constructor(props) {
        super(props);
    }

    @observable payInfo: payInfoModel;
    @observable isGenerated: boolean = false;
    @observable superRate: string;

    handleSuperInput(value: string): void {
        this.superRate = value;
    }

    @action
    handleSubmit(event, values) {
        var annualSalary = Math.round(values["annualSalary"]);
        var grossIncome = Math.round(values["annualSalary"] / 12);
        var incomeTax = 0;
        if (values["annualSalary"] <= 18200) {
            incomeTax = 0;
        } else if (values["annualSalary"] >= 18201 && values["annualSalary"] <= 37000) {
            incomeTax = Math.round((values["annualSalary"] - 18200) * 0.19 / 12);
        } else if (values["annualSalary"] >= 37001 && values["annualSalary"] <= 87000) {
            incomeTax = Math.round((3572 + (values["annualSalary"] - 37000) * 0.325) / 12);
        } else if (values["annualSalary"] >= 87001 && values["annualSalary"] <= 180000) {
            incomeTax = Math.round((19822 + (values["annualSalary"] - 87000) * 0.37) / 12);
        } else if (values["annualSalary"] >= 180001) {
            incomeTax = Math.round((54232 + (values["annualSalary"] - 18000) * 0.45) / 12);
        }
        var netIncome = grossIncome - incomeTax;
        var superAmount = Math.round((grossIncome * parseFloat(this.superRate) / 100));
        var pay = netIncome - superAmount;

        this.payInfo = {
            firstName: values["firstName"],
            lastName: values["lastName"],
            annualSalary: annualSalary.toFixed(2),
            payDate: new Date().toLocaleString('en-AU', timeOptions),
            payFrequency: payFrequency,
            grossIncome: grossIncome.toFixed(2),
            incomeTax: incomeTax.toFixed(2),
            netIncome: netIncome.toFixed(2),
            super: superAmount.toFixed(2),
            pay: pay.toFixed(2)
        }

        this.isGenerated = true;
    }



    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col md="12" style={{ padding: '60px 80px' }}>
                        <div>
                            <h1 style={{
                                fontFamily: 'inherit',
                                fontWeight: 500,
                                fontSize: '24px'
                            }}>Payslip Generator
                            </h1>
                        </div>
                        <Card>
                            {
                                !this.isGenerated ?
                                    <AvForm style={{ margin: '20px' }} autoComplete="on" onValidSubmit={(event, values) => this.handleSubmit(event, values)}>
                                        <Row>
                                            <Col md={6}>
                                                <AvField type="text" name="firstName" label="First Name" validate={{
                                                    required: { value: true, errorMessage: 'Please enter a First Name' },
                                                    minLength: { value: 1, errorMessage: 'Your name must be between 1 and 60 characters' },
                                                    maxLength: { value: 60, errorMessage: 'Your name must be between 1 and 60 characters' }
                                                }} />
                                            </Col>
                                            <Col md={6}>
                                                <AvField type="text" name="lastName" label="Last Name" validate={{
                                                    required: { value: true, errorMessage: 'Please enter a your Last Name' },
                                                    minLength: { value: 1, errorMessage: 'Your name must be between 1 and 60 characters' },
                                                    maxLength: { value: 60, errorMessage: 'Your name must be between 1 and 60 characters' }
                                                }} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <AvField type="text" name="annualSalary" label="Annual Salary" validate={{
                                                    required: { value: true, errorMessage: 'Please enter a Annual Salary' },
                                                    number: { value: true, errorMessage: 'The Annual Salary must be composed only with numbers' }
                                                }} />
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="superRate">Superannuation Rate</Label>
                                                    <InputGroup>
                                                        <InputGroupAddon addonType="prepend">%</InputGroupAddon>
                                                        <Input id="superRate" onChange={(event) => this.handleSuperInput(event.target.value)} />
                                                    </InputGroup>
                                                </FormGroup>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Button color="success" size="md" type="submit">{'Generate Payslip'}</Button>
                                            </Col>
                                        </Row>
                                    </AvForm>
                                    :
                                    <div>
                                        <div ref={ref}>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>Item</th>
                                                        <th>Employee Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>Employee</th>
                                                        <td>{this.payInfo.firstName} {this.payInfo.lastName}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Pay Date</th>
                                                        <td>{this.payInfo.payDate}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Pay Frequency</th>
                                                        <td>{this.payInfo.payFrequency}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Annual Income</th>
                                                        <td>{this.payInfo.annualSalary}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Gross Income</th>
                                                        <td>{this.payInfo.grossIncome}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Income Tax</th>
                                                        <td>{this.payInfo.incomeTax}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Net Income</th>
                                                        <td>{this.payInfo.netIncome}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Super</th>
                                                        <td>{this.payInfo.super}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Pay</th>
                                                        <td>{this.payInfo.pay}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>
                                                            <Button color="success" style={{ width: '142.89px' }}>Pay</Button>
                                                            <Pdf targetRef={ref} filename="code-example.pdf">
                                                                {({ toPdf }) => <Button color="secondary" style={{ width: '142.89px', marginLeft:'10px' }} onClick={toPdf}>Generate PDF</Button>}
                                                            </Pdf>
                                                        </th>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </div>
                            }
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export interface payInfoModel {
    firstName: string,
    lastName: string,
    annualSalary: string,
    payDate: string,
    payFrequency: string,
    grossIncome: string,
    incomeTax: string,
    netIncome: string,
    super: string,
    pay: string
}

export default Dashboard;
