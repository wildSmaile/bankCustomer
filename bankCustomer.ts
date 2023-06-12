import assert from 'assert';

class BankCustomer {
  private name: string;
  private pinCode: string;

  constructor(name: string, pinCode: string) {
    this.name = name;
    this.pinCode = pinCode;
  }

  getName(): string {
    return this.name;
  }

  verifyPinInput(input: string): boolean {
    return input === this.pinCode;
  }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
