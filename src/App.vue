<template>
  <div id="app">
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">Mickaël</b-navbar-brand>
    </b-navbar>

    <div class="container contenu">
      <h1>Bienvenue sur mon site !</h1>
      <div class="row">
        <div class="col-sm-4">
          <div>
            <b-card
                title="Montain bike"
                img-src="./images/mountain_bike.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
              <b-card-text>
                Mes plus belles ballades !
              </b-card-text>

              <b-button href="#" variant="primary">Voir</b-button>
            </b-card>
          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <b-card
                title="Tango"
                img-src="./images/tango.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
              <b-card-text>
                Mes plus belles photos de tango.
              </b-card-text>

              <b-button href="#" variant="primary">Voir</b-button>
            </b-card>
          </div>
        </div>

        <div class="col-sm-4">
          <div>
            <b-card
                title="Montagne"
                img-src="./images/mountain.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
              <b-card-text>
                Mes photos de montagnes.
              </b-card-text>

              <b-button href="#" variant="primary">Voir</b-button>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
</style>
