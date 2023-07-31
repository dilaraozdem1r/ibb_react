import React, { Component } from "react";


export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          class="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
          <strong className="text-primary">Merhabalar!</strong>
          {/* Inline CSS */}
          <span style={{"color":"red"}}>Nasılsınız</span>  
        </div>

        <button className="btn btn-primary mt-3 mb-3">
          /blog/list button
        </button>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum rem alias nostrum vel, dolorem fugit, odit dolorum cupiditate maiores consectetur maxime ad ea delectus omnis vero et non consequatur!
        Officiis ducimus magnam cumque esse molestiae atque, nesciunt impedit magni ratione. Magni consequatur, neque ad nemo ipsum at ducimus ipsam iusto, fuga deserunt natus asperiores perspiciatis recusandae culpa eos sapiente?
        Ipsam distinctio exercitationem quibusdam excepturi maiores ea cupiditate, voluptatibus mollitia esse, vitae doloribus maxime illo enim laborum corrupti? Harum modi vero vitae optio odit. Maiores enim earum distinctio deleniti soluta!
        Error tempora enim illum labore quis tempore ratione ea repellat impedit distinctio, molestias animi officia consectetur nulla cum nam veritatis rerum explicabo quas neque quae! Assumenda nihil explicabo expedita! Qui!
        Laborum suscipit voluptas ex ullam commodi officia culpa quia quisquam pariatur ipsum consequatur fugiat quae fuga sint, et impedit quas accusamus amet nisi vitae animi delectus, eligendi non necessitatibus? Odio?
        Sunt voluptas repellat voluptate voluptates ut inventore repellendus in, maxime, eveniet eaque harum dolores autem dignissimos dolore tempore quas. Nemo rerum sit quisquam similique praesentium tenetur itaque vitae at ut?
        Voluptatem porro eius quo a? Unde, cupiditate ducimus molestias quis voluptas molestiae quae optio. Fugiat officiis fuga obcaecati esse vero nulla ex, illum maxime. Ab quos eveniet repudiandae ad error?
        Earum aspernatur, doloremque autem delectus voluptatibus esse dolorum enim minus eum quae alias error natus quo numquam officia dolore expedita cupiditate! Magnam quae veritatis, maxime illo quaerat dolores perspiciatis porro!
        Mollitia id magni in veniam quaerat nobis adipisci recusandae, dolor distinctio. Fuga temporibus voluptate suscipit officia repellat animi, maiores illum amet minus corporis, sit esse, impedit expedita. Nam, dolor dignissimos.
        Nostrum reprehenderit quod perferendis aut animi eligendi blanditiis, inventore illum magnam repellendus accusamus corporis excepturi officia ipsam soluta eaque sint. Amet adipisci hic rem perferendis quo voluptatem ut eos culpa.</p>
      </React.Fragment>
    );
  }
}
