import * as React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../views/Dashboard';

test('Dashboard generate right Payslip result after input', (...props) => {
  const dashboard = shallow<Dashboard>(<Dashboard {...props} />);
  const timeOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
};
  const values = {
    "firstName": "John",
    "lastName": "Smith",
    "annualSalary": "60050"
  }
  const event = {};
  const payRate = "9.00";
  // Interaction demo
  // dashboard.find('AvForm').simulate('submit', {target:{values}})
  dashboard.instance().handleSuperInput(payRate)
  dashboard.instance().handleSubmit(event, values);
  // dashboard.find('Button').simulate('click');
  // expect(dashboard.instance().superRate).toEqual('2');
  expect(dashboard.instance().payInfo).toEqual(
    {
      "firstName" : "John",
      "lastName" : "Smith",
      "annualSalary": "60050.00",
      "payDate": new Date().toLocaleString('en-AU', timeOptions),
      "payFrequency": "Monthly",
      "grossIncome": "5004.00",
      "incomeTax": "922.00",
      "netIncome": "4082.00",
      "super": "450.00",
      "pay": "3632.00"    
    }
  )
  // Snapshot demo
  //   expect(dashboard).toMatchSnapshot();
});