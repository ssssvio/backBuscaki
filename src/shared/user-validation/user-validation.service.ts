import { Injectable } from '@nestjs/common';
import { CustomerRepository } from 'src/data/customer/repository/customer.repository';
import { MerchantRepository } from 'src/data/merchant/repository/merchant.repository';

@Injectable()
export class UserValidationService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly merchantRepository: MerchantRepository,
  ) {}

  async isUsernameTaken(username: string): Promise<boolean> {
    const customerExists = await this.customerRepository.findByUsername(username);
    const merchantExists = await this.merchantRepository.findByUsername(username);
    return !!(customerExists || merchantExists);
  }
}
