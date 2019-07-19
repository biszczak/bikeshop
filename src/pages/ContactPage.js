import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css';

class ContactPage extends Component {
    state = {
        value: '',
        isEmpty: true,
        sending: false,
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value.length >= 20) {
            this.setState({
                value: '',
                sending: true
            })

            setTimeout(() => {
                this.setState({
                    sending: false
                })
            }, 3000);
        } else {
            alert('Wiadomość powinna zawierać co najmniej 20 znaków')
        }
    }

    render() {
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h2>Napisz do nas</h2>
                    <textarea placeholder="Wpisz wiadomość" value={this.state.value} onChange={this.handleChange}></textarea>
                    {this.state.sending ? <p style={{ display: 'block', float: 'left', color: '#3c3c3c', fontWeight: 400, height: '40px' }}>Wysłano wiadomość</p> : <button className="primary-btn-container">
                        <div className="primary-btn">Wyślij</div>
                    </button>}
                </form>
                <Prompt
                    when={this.state.value}
                    message="Masz niewypełniony formularz. Czy na pewno chcesz opóścić tę stronę?"
                />
            </div>
        );
    }
}

export default ContactPage;