---
layout: default
---
Setup
==================

<div class="card">
  <div class="card-block">
    <h4 class="card-title">Step 1</h4>
    <p class="card-text">This is step 1</p>
  </div>
</div>
<p>

<div style="text-align: center;">
  <div id="step2-selector" class="btn-group" role="group">
    <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-parent="#step2" data-target="#step2-option1"  aria-pressed="true" aria-controls="step2-option1">
    Option #1
    </button>
    <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-parent="#step2" data-target="#step2-option2" aria-pressed="false" aria-controls="step2-option2">
    Option #2
    </button>
  </div>
</div>

<div id="step2" aria-multiselectable="true">
  <div class="card">
    <div id="step2-option1" class="collapse show" aria-labelledby="option1">
      <div class="card-block">
        <h4 class="card-title">Option 1</h4>
        <p class="card-text">This is option 1</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
  <div class="card">
    <div id="step2-option2" class="collapse" aria-labelledby="option2">
      <div class="card-block">
        <h4 class="card-title">Option 2</h4>
        <p class="card-text">This is option 2</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</div>
