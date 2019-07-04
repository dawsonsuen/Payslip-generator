import * as React from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Card, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { observable, action } from 'mobx';

const timeOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
};

@observer
class Dashboard extends React.Component<{}> {
    constructor(props) {
        super(props);
    }

    @observable payInfo: payInfoModel;

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
        var superAmount = Math.round((grossIncome * values["superRate"] / 100));
        var pay = netIncome - superAmount;
        this.payInfo = {
            firstName: values["firstName"],
            lastName: values["lastName"],
            annualSalary: annualSalary.toFixed(2),
            payDate: new Date().toLocaleString('en-AU', timeOptions),
            grossIncome: grossIncome.toFixed(2),
            incomeTax: incomeTax.toFixed(2),
            netIncome: netIncome.toFixed(2),
            super: superAmount.toFixed(2),
            pay: pay.toFixed(2)
        }
        console.log(this.payInfo);
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col md="12" style={{ padding: '20px 40px' }}>
                        <div><strong>Payslip Generator</strong></div>
                        <Card>
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
                                        <AvField type="text" name="superRate" label="Superannuation Rate" validate={{
                                            required: { value: true, errorMessage: 'Please enter a Superannuation Rate' },

                                        }} />
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Button color="success" type="submit">{'Generate Payslip'}</Button>
                                    </Col>
                                </Row>
                            </AvForm>
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
    grossIncome: string,
    incomeTax: string,
    netIncome: string,
    super: string,
    pay: string
}

export default Dashboard;
