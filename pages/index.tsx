import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Agent from '../components/Dashboard/agent.tsx';
import CardStats from "../components/Cards/CardStats.js";

import React, { Component } from 'react';
import { useMemo } from 'react';
import { useTable } from 'react';
import { COLUMNS } from '../components/Columns/agent';
import { useState } from 'react';
import axios from '../lib/axios.js';
import Layout from '../components/Layout';
import Progressbar from '../components/Progressbar';

import ToggleSwitch from "../components/Toggleswitch";



export async function getStaticProps(){
  // const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // const dataUsers = await response.json();
  const response = await axios.get("lxgaming/public/api/agent");
  const dataUsers = await response.data;

  const response2 = await axios.get("lxgaming/public/api/market");
  const dataMarkets = await response2.data;
  

  return {
    props: {
      dataUsers, dataMarkets
    },
  }
}




export default function Home(props) {
  //const {dataUsers} = props;
  const [contacts, setContacts] = useState(props.dataUsers.data);
  const [markets, setMarkets] = useState(props.dataMarkets.data);

  console.log(props.dataMarkets);
  return(
    <Layout>
    <div className="wrapper">
      <div className="container-dashboard"> 
        <div className="wrapper2">
          <div className="dashboard">Dashboard</div>
          <div className="dashboard-right button-dashboard-right">Today</div>
          <div className="dashboard-right button-dashboard-right">Yesterday</div>
          <div className="dashboard-right button-dashboard-right">Weekly</div>
          <div className="dashboard-right button-dashboard-right-active">Monthly</div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-sm-4 col-6">
              <div className="description-block border-right">
                <span className="description-text"><a>Total User Active </a></span>
                <h5 className="description-header"><a className="result-stats">566</a></h5>
                <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 14.50%</span> <a>vs last month</a>
              </div>
            </div>
            <div className="col-sm-4 col-6">
              <div className="description-block border-right">
                <span className="description-text"><a>Total Turnover</a></span>
                <h5 className="description-header"><a className="result-stats">Rp4.500.000,00</a></h5>
                <span className="description-percentage text-danger"><i className="fas fa-caret-down"></i> 21.33%</span> <a>vs last month</a>
              </div>
            </div>
            <div className="col-sm-4 col-6">
              <div className="description-block border-right">
                <span className="description-text"><a>Total Paid</a></span>
                <h5 className="description-header"><a className="result-stats">Rp2.450.000,00</a></h5>
                <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 14.54%</span> <a>vs last month</a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 col-6">
              <div className="description-block border-right">
                <span className="description-text"><a>Total Win</a></span>
                <h5 className="description-header"><a className="result-stats">Rp7.320.000,00</a></h5>
                <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 30%</span> <a>vs last month</a>
              </div>
            </div>
            <div className="col-sm-4 col-6">
              <div className="description-block border-right">
                <span className="description-text"><a>Total Profit Lose </a></span>
                <h5 className="description-header"><a className="result-stats">Rp6.200.000,00</a></h5>
                <span className="description-percentage text-success"><i className="fas fa-caret-up"></i> 25.56%</span> <a>vs last month</a>
              </div>
            </div>
            <div className="col-sm-4 col-6">
              <div className="description-block border-right">
                <span className="description-text"><a>Total Ongoing Bet </a></span>
                <h5 className="description-header"><a className="result-stats">Rp4.400.000</a></h5>
                <span className="description-percentage text-danger"><i className="fas fa-caret-down"></i> 12.95%</span> <a>vs last month</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <div className="container-agent">
        <div className="app-container">
          <div className="wrapper2">
          <a className="total-active">Total Active / Total Agent</a> <a className="see-detail"> See Details</a>
          </div>
          <a className="total-active-value">24/24</a>
          <table>
            <thead>
              <tr>
                <th><a>No</a></th>
                <th><a>Name</a></th>
                <th><a>Code</a></th>
                <th><a>Status</a></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => 
                <tr key={contact.id}>
                <td><a>{contact.id}</a></td>
                <td><a>{contact.name}</a></td>
                <td><a>{contact.code}</a></td>
                <td><a>{contacts.status = 1 ? 'Active' : 'Inactive'}</a></td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="button-12"> Create Agent </div>
        </div>
      </div>
      <div className="container-summary"> 
        <div className="wrapper2">
          <div className="market-summary">Market Summary</div>
          <div className="filter-bar"><a>Filters</a></div>
          <div className="search-bar"><a>Search Market...</a></div>
          
        </div>
        <div className="app-container">
          <table>
            <thead>
              <tr>
                <th><a>Name</a></th>
                <th><a>Period</a></th>
                <th><a>Close Time</a></th>
                <th><a>Total Player Bet</a></th>
                <th><a>Total Player Paid</a></th>
                <th><a>Status</a></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {markets.map((market) => 
                <tr key={market.id}>
                <td><a>{market.code}-{market.name}</a></td>
                <td><a>{market.period}</a></td>
                <td><a>Close 21:30 3:30</a> <Progressbar bgcolor="black" progress='30'  height={1} /></td>
                <td><a>Rp{market.totplbet}</a></td>
                <td><a>Rp{market.totplpaid}</a></td>
                <td><a>{market.status = 1 ? 'Online' : 'Offline'}</a></td>
                <td><React.Fragment>
                      <ToggleSwitch />
                    </React.Fragment>
                </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    
    </Layout>
  );
}


