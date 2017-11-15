<template>
  <div class="s-lottery">
    <div class="s-lottery-head">
      <ul>
        <li class="s-lottery-head1"></li>
        <li class="s-lottery-head2">开奖大厅</li>
        <li class="s-lottery-head3"></li>
      </ul>
    </div>
    <div class="s-content">
  
      <router-link tag="div" class="tab-item" to="/record/1">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 1">
          <dt class="s-lottery-left">
              <dl class="left-content">
                <dt>
                  <span class="s-lottery-t">{{items.name}}</span>
                  <span class="s-lottery-q">第{{items.issue_number}}期</span>
                  <span class="s-lottery-s">{{items.draw_time}}</span>
                </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span><span v-if="items.number6">{{items.number6}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/2">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 2">
          <dt class="s-lottery-left">
        <dl class="left-content">
        <dt>
          <span class="s-lottery-t">{{items.name}}</span>
          <span class="s-lottery-q">第{{items.issue_number}}期</span>
          <span class="s-lottery-s">{{items.draw_time}}</span>
        </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/3">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 3">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/4">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 4">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span>
              <span>{{items.number5}}</span><span style="background:#35b5fe;">{{items.number6}}</span> <span style="background:#35b5fe;">{{items.number7}}</span>
            </p>
  
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/5">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 5">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span><span >{{items.number6}}</span>
              <span >{{items.number7}}</span> <span >{{items.number8}}</span> <span >{{items.number9}}</span> <span>{{items.number10}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/6">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 6">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/7">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 7">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
             
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/8">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 8">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <img v-if="items.number1" :src="items.number1 | transImg" />
              <img v-if="items.number2" :src="items.number2 | transImg" />
              <img v-if="items.number3" :src="items.number3 | transImg" />
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2">
          <img src="../../images/my_more.png" alt="右箭头">
        </dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/9">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 9">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <img v-if="items.number1" :src="items.number1 | transImg" />
              <img v-if="items.number2" :src="items.number2 | transImg" />
              <img v-if="items.number3" :src="items.number3 | transImg" />
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/10">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 10">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span><span v-if="items.number6">{{items.number6}}</span>
              <span v-if="items.number7" style="background:#35b5fe">{{items.number7}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/11">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 11">
          <dt class="s-lottery-left">
                                        <dl class="left-content">
                                          <dt>
                                            <span class="s-lottery-t">{{items.name}}</span>
                                            <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                            <span class="s-lottery-s">{{items.draw_time}}</span>
                                          </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/13">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 13">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/14">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 14">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
              <span>{{items.number6}}</span><span>{{items.number7}}</span><span>{{items.number8}}</span><span>{{items.number9}}</span><span>{{items.number10}}</span>
              
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/15">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 15">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
             
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
  
      <router-link tag="div" class="tab-item" to="/record/16">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 16">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
              
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/17">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 17">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
              
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/18">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 18">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span>
             
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
  
      <router-link tag="div" class="tab-item" to="/record/19">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 19">
          <dt class="s-lottery-left">
                                          <dl class="left-content">
                                            <dt>
                                              <span class="s-lottery-t">{{items.name}}</span>
                                              <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                              <span class="s-lottery-s">{{items.draw_time}}</span>
                                            </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span>
  
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
      <router-link tag="div" class="tab-item" to="/record/20">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 20">
          <dt class="s-lottery-left">
                                            <dl class="left-content">
                                              <dt>
                                                <span class="s-lottery-t">{{items.name}}</span>
                                                <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                                <span class="s-lottery-s">{{items.draw_time}}</span>
                                              </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <img v-if="items.number1" :src="items.number1 | transImg" />
              <img v-if="items.number2" :src="items.number2 | transImg" />
              <img v-if="items.number3" :src="items.number3 | transImg" />
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
  
  
      <router-link tag="div" class="tab-item" to="/record/21">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 21">
          <dt class="s-lottery-left">
                                        <dl class="left-content">
                                          <dt>
                                            <span class="s-lottery-t">{{items.name}}</span>
                                            <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                            <span class="s-lottery-s">{{items.draw_time}}</span>
                                          </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span> + </span><span>{{items.number2}}</span><span>  + </span> <span>{{items.number3}}</span> <span> = </span>
              <span v-if="items.number4">{{items.number4}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
  
      <router-link tag="div" class="tab-item" to="/record/22">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 22">
          <dt class="s-lottery-left">
                                        <dl class="left-content">
                                          <dt>
                                            <span class="s-lottery-t">{{items.name}}</span>
                                            <span class="s-lottery-q">第{{items.issue_number}}期</span>
                                            <span class="s-lottery-s">{{items.draw_time}}</span>
                                          </dt>
          <dd>
            <p v-if="items.number1 || items.number2 || items.number3">
              <span>{{items.number1}}</span><span> + </span><span>{{items.number2}}</span><span>  + </span> <span>{{items.number3}}</span> <span> = </span>
              <span v-if="items.number4">{{items.number4}}</span>
            </p>
            <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
          </dd>
        </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
  
      <router-link tag="div" class="tab-item" to="/record/23">
        <dl v-for="(items, indexs) in results" v-if="items.lot_type_id == 23">
          <dt class="s-lottery-left">
            <dl class="left-content">
              <dt>
                <span class="s-lottery-t">{{items.name}}</span>
                <span class="s-lottery-q">第{{items.issue_number}}期</span>
                <span class="s-lottery-s">{{items.draw_time}}</span>
              </dt>
              <dd>
                <p v-if="items.number1 || items.number2 || items.number3">
                  <span>{{items.number1}}</span><span>{{items.number2}}</span><span>{{items.number3}}</span><span>{{items.number4}}</span><span>{{items.number5}}</span><span v-if="items.number6">{{items.number6}}</span>
                  <span v-if="items.number7">{{items.number7}}</span>
                 </p>
                <h4 v-if="!items.number1 || !items.number2 || !items.number3">等待开奖</h4>
             </dd>
          </dl>
          </dt>
          <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
  
    </div>
    <tab></tab>
  </div>
</template>


<script type="text/ecmascript-6">
import { Indicator } from "mint-ui";
import MHeader from "@/components/m-header/m-header";
import Tab from "@/components/tab/tab";
import { getRecommend, getDiscList, requestOpt, alertip } from "api/recommend";
export default {
  data() {
    return {
      pic: "string",
      name: "string",
      numberX: "string",
      draw_time: "string",
      issue_number: "string",
      curr_issue_number: "string",
      curr_draw_time: "string",
      curr_draw_res: "string",
      curr_endsale_time: "string",
      curr_startsale_time: "string",
      curr_count_down: "int",
      status: "int",
      lot_type_id: "int",
      is_hot: "int",
      frequency: "int",
      results: []
    };
  },
  components: {
    MHeader,
    Tab
  },
  created() {
    Indicator.open();
    this.startFn();
  },
  mounted() {
    var that = this;
    // setInterval(that.startFn, 10000);
  },

  methods: {
    startFn() {
      requestOpt.reqnoGetpara(
        "betting_list?page=2",
        {
          pic: "string",
          name: "string",
          numberX: "string",
          draw_time: "string",
          issue_number: "string",
          curr_issue_number: "string",
          curr_draw_time: "string",
          curr_draw_res: "string",
          curr_endsale_time: "string",
          curr_startsale_time: "string",
          curr_count_down: "int",
          status: "int",
          lot_type_id: "int",
          is_hot: "int",
          frequency: "int"
        },
        res => {
          this.results = res.data.data.list;
          Indicator.close();
        },
        err => {
          alertip(err);
          Indicator.close();
        }
      );
    }
  },
  watch: {
    results(newVal, oldVal) {
      this.results = newVal;
    }
  },
  filters: {
    transImg: function(val) {
      var imgUrl1 = require("../../images/ks@1.png");
      var imgUrl2 = require("../../images/ks@2.png");
      var imgUrl3 = require("../../images/ks@3.png");
      var imgUrl4 = require("../../images/ks@4.png");
      var imgUrl5 = require("../../images/ks@5.png");
      var imgUrl6 = require("../../images/ks@6.png");
      if (val == 1) {
        val = imgUrl1;
      } else if (val == 2) {
        val = imgUrl2;
      } else if (val == 3) {
        val = imgUrl3;
      } else if (val == 4) {
        val = imgUrl4;
      } else if (val == 5) {
        val = imgUrl5;
      } else if (val == 6) {
        val = imgUrl6;
      }
      return val;
    }
  }
  // updated(){

  //   this.startFn();
  // }
};
</script>

<style scoped>
.s-lottery {
  width: 7.5rem;
  height: 13.34rem;
  display: block;
  background: #ffffff;
}

.s-lottery-head {
  width: 7.5rem;
  height: 0.88rem;
  display: block;
  margin: auto;
  background: #ff3a3b;
  position: fixed;
  top: 0;
  z-index: 999;
}

.s-lottery-head ul {
  width: 6.9rem;
  height: 0.88rem;
  display: block;
  margin: auto;
  line-height: 0.88rem;
}

.s-lottery-head ul li {
  float: left;
  height: 0.88rem;
  display: block;
}

.s-lottery-head1 {
  width: 1.5rem;
}

.s-lottery-head2 {
  width: 3.8rem;
  text-align: center;
  font-size: 0.32rem;
  font-weight: normal;
  color: #ffffff;
}

.s-lottery-head3 {
  width: 1.5rem;
  text-align: right;
}

/*采种列表*/

.s-content {
  width: 7.5rem;
  height: auto;
  display: block;
  background: #ffffff;
  margin-top: 0.88rem;
  margin-bottom: 0.98rem;
  margin-bottom: 0.98rem;
  padding-bottom: 0.98rem;
}

.s-content dl {
  width: 7.5rem;
  height: 1.24rem;
  border-bottom: 1px solid #eeeeee;
  background: #ffffff;
}

.s-content dl dt.s-lottery-left {
  width: 6.72rem;
  height: 1.24rem;
  border-bottom: 1px solid #eeeeee;
  float: left;
  margin-left: 0.3rem;
}

.s-content dl dt.s-lottery-left dl.left-content {
  width: 6.72rem;
  height: 1.24rem;
  display: block;
}

.s-content dl dt.s-lottery-left dl.left-content dt {
  width: 6.72rem;
  height: 0.62rem;
  display: block;
  line-height: 0.62rem;
}

.s-content dl dt.s-lottery-left dl.left-content dt span.s-lottery-t {
  font-size: 0.26rem !important;
  color: #fe3d3d;
  display: inline-block;
  height: 0.62rem;
  float: left;
}

.s-content dl dt.s-lottery-left dl.left-content dt span.s-lottery-q {
  font-size: 0.2rem !important;
  color: #000000;
  display: inline-block;
  height: 0.62rem;
  float: left;
  margin-left: 0.2rem;
}

.s-content dl dt.s-lottery-left dl.left-content dt span.s-lottery-d {
  font-size: 0.18rem !important;
  color: #676767;
  display: inline-block;
  height: 0.62rem;
  float: left;
  margin-left: 0.08rem;
}

.s-content dl dt.s-lottery-left dl.left-content dt span.s-lottery-s {
  font-size: 0.18rem !important;
  color: #323232;
  display: inline-block;
  height: 0.62rem;
  float: left;
  margin-left: 0.2rem;
}

.s-content dl dt.s-lottery-left dl.left-content dd {
  width: 6.72rem;
  height: 0.62rem;
  display: block;
  line-height: 0.62rem;
  font-size: 0.22rem;
  color: #fc823c;
  text-align: left;
}

.s-content dl dt.s-lottery-left dl.left-content dd span {
  width: 0.36rem;
  height: 0.36rem;
  display: block;
  line-height: 0.36rem;
  font-size: 0.22rem;
  color: #ffffff;
  text-align: center;
  background: #fc3d3d;
  float: left;
  margin-right: 0.1rem;
  border-radius: 45px;
  border: none;
}

.s-content dl dt.s-lottery-left dl.left-content dd img {
  width: 0.42rem;
  height: 0.42rem;
  display: block;
  line-height: 0.42rem;
  text-align: center;
  float: left;
  margin-right: 0.1rem;
  border: none;
}

.s-content dl dd.center-list2 {
  width: 0.18rem;
  height: 0.3rem;
  float: right;
  display: inline-block;
  margin-right: 0.3rem;
}

.s-content dl dd.center-list2 img {
  width: 0.18rem;
  height: 0.3rem;
  float: right;
  display: inline-block;
  margin-top: 0.47rem;
}
</style>


