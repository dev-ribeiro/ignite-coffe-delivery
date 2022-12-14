import { MapPin, ShoppingCart } from 'phosphor-react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useCheckoutCart } from '../../hooks/useCheckoutCart'
import { useHandleUserLocation } from '../../hooks/useHandleUserLocation'
import logo from '../../images/logo.svg'
import {
  CartWrapper,
  HeaderContainer,
  LocationContainer,
  ShoppingCartContainer,
} from './styles'

export function Header() {
  const { checkoutCart } = useCheckoutCart()
  const { location, getUserLocation } = useHandleUserLocation()

  useEffect(() => {
    getUserLocation()
  }, [])

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <ShoppingCartContainer>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>{location}</span>
        </LocationContainer>
        {checkoutCart.length !== 0 ? (
          <CartWrapper>
            <NavLink className="cart" to="/checkout">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
            <span>{checkoutCart.length}</span>
          </CartWrapper>
        ) : (
          <NavLink className="cart" to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        )}
      </ShoppingCartContainer>
    </HeaderContainer>
  )
}
