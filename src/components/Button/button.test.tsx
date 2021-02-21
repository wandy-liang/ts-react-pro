import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, {ButtonProps, ButtonSize, ButtonType} from './button'

// test('our first react test case', () => {
//     const wrapper = render(<Button>Nice</Button>)
//     const element = wrapper.queryAllByText('Nice')
//     expect(element).toBeTruthy()
//     expect(element).toBeInTheDocument()
// })



const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

const disabledProps: ButtonProps ={
    disabled: true,
    onClick: jest.fn()
}


describe('test button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on differece props ', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg klass')
    })
    it('should render a link when btnType equals link and href is provided ', () => {
        const  wrapper = render(<Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled set to true ', () => {
        const wrapper = render(<Button {...disabledProps}>Disabled</Button>)
        const element = wrapper.getByText('Disabled') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})






