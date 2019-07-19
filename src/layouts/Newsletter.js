import React, { Component } from 'react';

class Newsletter extends Component {
    state = {
        value: '',
        isSend: false,
        validate: false
    }

    handleInput = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    sendMail = (e) => {
        e.preventDefault();
        console.log(this.state.value.indexOf())
        if (this.state.value.indexOf('@') !== -1) {
            this.setState({
                isSend: true,
                validate: false
            })
        } else {
            this.setState({
                validate: true
            })
        }

    }


    render() {




        return (
            <div style={{ backgroundColor: '#fff', margin: '0 auto', textAlign: 'center', color: '#3c3c3c', padding: '30px' }}>
                <h3 style={{ fontFamily: "'Old Standard TT', serif", fontSize: '46px', fontWeight: 400, marginBottom: '30px' }}>Newsletter</h3>
                <p className="desc" style={{ display: 'block', marginBottom: '30px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sit est minus explicabo beatae! Beatae tenetur illum soluta praesentium eveniet blanditiis fugit totam perspiciatis sit, minima, neque architecto, necessitatibus optio!</p>
                <form style={{ display: 'flex', justifyContent: 'center', border: 'none' }}>
                    {this.state.isSend ? <p>Thanks for sending us your e-mail!</p> : <>
                        <input onChange={this.handleInput} value={this.setState.value} placeholder="Your email" type="email" style={{ backgroundColor: '#e8e8e8', padding: '10px', outline: 'none', borderImage: 'none', borderColor: 'none', border: 'none', fontFamily: "'Ubuntu', serif", fontSize: '16px' }} />
                        <div className='primary-btn-container'>
                            <button onClick={this.sendMail} type="submit" className='primary-btn' style={{ cursor: 'pointer' }}>Send</button>
                        </div>
                    </>}
                </form>
                {this.state.validate ? <p style={{ color: '#ff3232' }}>Email address must contain '@' mark!</p> : null}
            </div>
        );
    }
}

export default Newsletter;