#! /usr/bin/env node

import inquirer from 'inquirer'


const Currency : any = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
        {
           name: 'from',
           message: 'Enter From Currency',
           type: 'list',
           choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: 'to',
            message: 'Enter to Currency',
            type: 'list',
            choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: 'amount',
            message: 'Enter Your Amount',
            type: 'number'
        }
    ]
)

let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

