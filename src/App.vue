<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <p>
      Welcome to your Vue.js app!
    </p>

    <section>
      <h3>Dropdown</h3>
      <p>
        向子组件传递对象，此例中为通过动态绑定父组件数据对象到子组件prop上传递一个对象,同时提供实例方法<span style="color: red" @click="toggleDropdown">toggle</span>作为外部编程接口
      </p>
      <p>
        通过传入的item来控制dropdown内部条目显示的情况
        <code>
          {header: 'true', label: 'XXX'}将被渲染成header条目；
          {divider: 'true', label: 'XXX'}将被渲染成divider条目；
          其他类型将被渲染为普通条目
        </code>
      </p>
      <dropdown :items="items" v-ref:dropdown placeholder="Dropdown..."></dropdown>
      <dropdown :items="items" v-ref:dropdown up="true" placeholder="Dropup..."></dropdown>
    </section>

    <section>
      <h3>Button Group</h3>
      <button-group>
        <button type="button" class="btn btn-default">Default</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <dropdown :items="items" v-ref:dropdown placeholder="Dropdown..."></dropdown>
      </button-group>
      <h4>Sizing</h4>
      <button-group size='lg'>
        <button type="button" class="btn btn-default">Default</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <dropdown :items="items" v-ref:dropdown placeholder="Dropdown..." size='lg'></dropdown>
      </button-group>
      <h4>Vertical</h4>
      <button-group size='sm' vertical="true">
        <button type="button" class="btn btn-default">Default</button>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <dropdown :items="items" v-ref:dropdown placeholder="Dropdown..."></dropdown>
      </button-group>
    </section>

    <section>
      <h3>Split Button Group</h3>
      <button-group>
        <button type="button" class="btn btn-danger">Dropdown</button>
        <dropdown :items="items" v-ref:splitBtnGroupDropdown placeholder="" right="true"></dropdown>
      </button-group>
    </section>

    <section>
      <h3>Input Group</h3>
      <input-group placeholder="Username">
        <span slot="before" class="input-group-addon">http://</span>
      </input-group>
      <input-group placeholder="Username">
        <span slot="after" class="input-group-addon">.com</span>
      </input-group>
      <input-group placeholder="Username">
        <span slot="before" class="input-group-addon">http://</span>
        <span slot="after" class="input-group-addon">.com</span>
      </input-group>
      <h4>Buttons with dropdowns</h4>
      <input-group placeholder="Username">
        <dropdown :items="items" v-ref:inputBtnGroupDropdown placeholder="Action" slot="before" class="input-group-btn"></dropdown>
      </input-group>
      <input-group placeholder="Username">
        <dropdown :items="items" v-ref:inputBtnGroupDropdown placeholder="Action" slot="after" class="input-group-btn"></dropdown>
      </input-group>
      <h4>Multiple buttons</h4>
      <input-group placeholder="Username">
        <div class="input-group-btn" slot="before">
          <button type="button" class="btn btn-default" aria-label="Bold"><span class="glyphicon glyphicon-bold"></span></button>
          <button type="button" class="btn btn-default" aria-label="Italic"><span class="glyphicon glyphicon-italic"></span></button>
        </div>
      </input-group>

    </section>

    <section>
      <h3>Nav</h3>
      <p>
        Tabset组件可以演示子组件使用this.$parent向父组件传递数据，父组件根据子组件传递的数据进行渲染；同时，父组件状态的变化引起子组件状态的变化。
      </p>
      <tabset v-style="tabs">
        <tab title="one">
          <p>
            Raw denim you probably haven't heard of them jean shorts Austin.
            Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor,
            williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth.
            Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone.
            Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
          </p>
        </tab>
        <tab title="two">
          <p>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
            Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
            Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
            Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.
            Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown.
            Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel.
            Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
          </p>
        </tab>
        <tab title="three">
          <dropdown slot="three" :items="items" v-ref:dropdown up="true" placeholder="Dropup..."></dropdown>
          <p>
            Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.
            Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
            Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
            Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.
            Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown.
            Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel.
            Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
          </p>
        </tab>
      </tabset>
    </section>

    <section>
        <h3>Breadcrumbs</h3>
        <breadcrumb :items="breadcrumbsItems"></breadcrumb>
    </section>

    <section>
      <h3>Pager</h3>
      <pager v-ref:pager></pager>
    </section>

    <section>
      <h3>Panel</h3>
      <panel>
        <div slot="heading">
          <button type="button" class="btn btn-primary">This is Heading</button>
        </div>
        <div class="">
          Panel content
        </div>
      </panel>
    </section>

    <section>
      <h3>Navbar</h3>
      <navbar>
        <img slot="brand" alt="Brand" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA81BMVEX///9VPnxWPXxWPXxWPXxWPXxWPXxWPXz///9hSYT6+vuFc6BXPn37+vz8+/z9/f2LeqWMe6aOfqiTg6uXiK5bQ4BZQX9iS4VdRYFdRYJfSINuWI5vWY9xXJF0YJR3Y5Z4ZZd5ZZd6Z5h9apq0qcW1qsW1q8a6sMqpnLyrn76tocCvpMGwpMJoUoprVYxeRoJjS4abjLGilLemmbrDutDFvdLPx9nX0eDa1OLb1uPd1+Td2OXe2eXh3Ofj3+nk4Orl4evp5u7u7PLv7fPx7/T08vb08/f19Pf29Pj39vn6+fuEcZ9YP35aQn/8/P1ZQH5fR4PINAOdAAAAB3RSTlMAIWWOw/P002ipnAAAAPhJREFUeF6NldWOhEAUBRvtRsfdfd3d3e3/v2ZPmGSWZNPDqScqqaSBSy4CGJbtSi2ubRkiwXRkBo6ZdJIApeEwoWMIS1JYwuZCW7hc6ApJkgrr+T/eW1V9uKXS5I5GXAjW2VAV9KFfSfgJpk+w4yXhwoqwl5AIGwp4RPgdK3XNHD2ETYiwe6nUa18f5jYSxle4vulw7/EtoCdzvqkPv3bn7M0eYbc7xFPXzqCrRCgH0Hsm/IjgTSb04W0i7EGjz+xw+wR6oZ1MnJ9TWrtToEx+4QfcZJ5X6tnhw+nhvqebdVhZUJX/oFcKvaTotUcvUnY188ue/n38AunzPPE8yg7bAAAAAElFTkSuQmCC">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </navbar>
      <h4>Inverted</h4>
      <navbar v-style="inverse">
        <img slot="brand" alt="Brand" width="20" height="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA81BMVEX///9VPnxWPXxWPXxWPXxWPXxWPXxWPXz///9hSYT6+vuFc6BXPn37+vz8+/z9/f2LeqWMe6aOfqiTg6uXiK5bQ4BZQX9iS4VdRYFdRYJfSINuWI5vWY9xXJF0YJR3Y5Z4ZZd5ZZd6Z5h9apq0qcW1qsW1q8a6sMqpnLyrn76tocCvpMGwpMJoUoprVYxeRoJjS4abjLGilLemmbrDutDFvdLPx9nX0eDa1OLb1uPd1+Td2OXe2eXh3Ofj3+nk4Orl4evp5u7u7PLv7fPx7/T08vb08/f19Pf29Pj39vn6+fuEcZ9YP35aQn/8/P1ZQH5fR4PINAOdAAAAB3RSTlMAIWWOw/P002ipnAAAAPhJREFUeF6NldWOhEAUBRvtRsfdfd3d3e3/v2ZPmGSWZNPDqScqqaSBSy4CGJbtSi2ubRkiwXRkBo6ZdJIApeEwoWMIS1JYwuZCW7hc6ApJkgrr+T/eW1V9uKXS5I5GXAjW2VAV9KFfSfgJpk+w4yXhwoqwl5AIGwp4RPgdK3XNHD2ETYiwe6nUa18f5jYSxle4vulw7/EtoCdzvqkPv3bn7M0eYbc7xFPXzqCrRCgH0Hsm/IjgTSb04W0i7EGjz+xw+wR6oZ1MnJ9TWrtToEx+4QfcZJ5X6tnhw+nhvqebdVhZUJX/oFcKvaTotUcvUnY188ue/n38AunzPPE8yg7bAAAAAElFTkSuQmCC">
        <ul class="nav navbar-nav">
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
          <li><a href="#">Link</a></li>
        </ul>
      </navbar>
    </section>

    <section>
      <h3>Modal</h3>
      <button type="button" class="btn btn-primary" @click="launchModal">Launch Modal</button>
      <modal v-ref:modal>
        <div class="" slot="modal-header">
          <h3>This is a Modal</h3>
        </div>
        <p>
          vue-loader will parse the file, extract each language block, pipe them through other loaders if necessary, and finally assemble them back into a CommonJS module whose module.exports is a Vue.js component options object.
        </p>
        <a href="javascript;">This is a link</a>
      </modal>
      <h4>Modal Title With Customized Content</h3>
      <button type="button" class="btn btn-primary" @click="launchModal2">launchModal2</button>
      <modal v-ref:modal2>
        <div class="" slot="modal-header">
          <button type="button" class="btn btn-primary">Title</button>
        </div>
        <p>
          vue-loader will parse the file, extract each language block, pipe them through other loaders if necessary, and finally assemble them back into a CommonJS module whose module.exports is a Vue.js component options object.
        </p>
        <a href="javascript;">This is a link</a>
        <div class="" slot="modal-footer">
          <img src="http://cn.vuejs.org/images/logo.png" alt="Vue Icon" style="width: 50px; heigth:50px;"/>
          <button type="button" class="btn btn-default"><i class="glyphicon glyphicon-off"></i></button>
        </div>
      </modal>
    </section>
  </div>
</template>

<script>
import Hello from './components/Hello.vue';
import Dropdown from './components/Dropdown.vue';
import ButtonGroup from './components/ButtonGroup.vue';
import InputGroup from './components/InputGroup.vue';
import Tab from './components/Tab.vue';
import Tabset from './components/Tabset.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Pager from './components/Pager.vue';
import Panel from './components/Panel.vue';
import Navbar from './components/Navbar.vue';
import Modal from './components/Modal.vue';

export default {
  data() {
    return {
      items: [
        {header: 'true', label: '数字'},
        {value: '1', label: 'One'},
        {value: '2', label: 'Two'},
        {value: '3', label: 'Three'},
        {value: '4', label: 'Four'},
        {value: '5', label: 'Five', disabled: true},
        {divider: 'true'},
        {header: 'true', label: '城市'},
        {value: 'XA', label: '西安'},
        {value: 'BJ', label: '北京'},
        {value: 'NJ', label: '南京'}
      ],
      breadcrumbsItems: [
        {text: 'Home', href: '#'},
        {text: 'Library', href: '#'},
        {text: 'Data', href: '#'}
      ]
    };
  },
  components: {
    Hello, Dropdown, ButtonGroup,
    InputGroup, Tab, Tabset,
    Breadcrumb, Pager, Panel,
    Navbar, Modal
  },
  methods: {
    toggleDropdown() {
      this.$refs.dropdown.toggle();
    },
    launchModal() {
      this.$refs.modal.show();
    },
    launchModal2() {
      this.$refs.modal2.show();
    }
  },
  events: {
    'page-changed.pager': function(page) {
      alert('current page is ' + page.current);
    },
    'show.bv.modal': function() {
      console.log('modal is showing');
    },
    'shown.bv.modal': function() {
      console.log('modal is shown');
    },
    'hide.bv.modal': function() {
      console.log('modal is hiding');
    },
    'hidden.bv.modal': function() {
      console.log('modal is hidden');
    },
    'confirm.bv.modal': function() {
      console.log('confirm');
    },
    'cancel.bv.modal': function() {
      console.log('cancel');
    }
  },
  ready() {
    this.$refs.pager.init({total: 5, current: 1});
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
