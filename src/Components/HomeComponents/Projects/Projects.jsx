import React, { Fragment } from 'react'
import project7 from '../../../assets/project7.png'

import './Styles.css'

const Projects =()=>(
    <Fragment  >
       <section id="work-a" class="text-center py-3">
      <div class="container">
       <div className='main-text'>
           <div className='after'></div>
           <h2>My Projects</h2>
           <div className='before'></div>
       </div>
        <div class="items">
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">React & Material UI React</p>
                <h2 class="item-text-title">Covid-19 Tracker</h2>
                <button className='repo'>visit github</button>
                <button className='web'>visit website</button>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">UI/UX</p>
                <h2 class="item-text-title">World Experience</h2>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">Photography &</p>
                <h2 class="item-text-title">Vanishing</h2>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">Design</p>
                <h2 class="item-text-title">Gap INC</h2>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">Mobile UI Design</p>
                <h2 class="item-text-title">Face THe Experience</h2>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">Design Concept</p>
                <h2 class="item-text-title">Bezier Curves</h2>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">Photography</p>
                <h2 class="item-text-title">Dock Ponder</h2>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">Web Applications</p>
                <h2 class="item-text-title">Restaurant App</h2>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src={project7} alt="" />
            </div>
            <div class="item-text">
              <div class="item-text-wrap">
                <p class="item-text-category">Social Network Concept</p>
                <h2 class="item-text-title">FriendFeed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </Fragment>
)
export default Projects