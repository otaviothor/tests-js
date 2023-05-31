import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product;

  beforeEach(() => {
    cart = new Cart();
    product = {
      title: 'Adidas Running - Men',
      price: 35388, // 353.88 | R$ 353,88
    };
  });

  it('should return 0 when getTotal() is executed in a newly created instance ', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price and recieve the total amount', () => {
    const item = {
      product,
      quantity: 2, // 70776
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });

  it('should ensure no more than on product exists at a time', () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(35388);
  });
});
