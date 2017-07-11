---
layout: default
---
# Setup
{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: .card}
<div>
{: .card-block}
<div>
{: .card-title markdown="span"}
#### Create an mbed account

  Go to the [mbed developer site](https://developer.mbed.org) and [create an account](https://developer.mbed.org/account/signup/?next=%2F).
  {: .card-text}

</div>
</div>
<p></p>


{: .card}
<div>
{: .card-block}
  <div>
{: .card-title markdown="span"}
#### How do you want to develop?

{: style="text-align: center;"}
  <div>
{: .btn-group #online-or-offline role="group"}
  <div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-parent="#compile" data-target="#online-compile" aria-controls="online-compile">Online</button>
    <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-parent="#compile" data-target="#offline-compile" aria-controls="offline-compile">Offline</button>
  {:/}
  </div>
</div>
</div>
</div>
<p></p>

{: #compile aria-multiselectable="true"}
<div>

{: .card}
<div>

{: #online-compile .collapse aria-labelledby="online"}
<div>
{: .card-block}
<div>
#### Get the code

  Visit the mbed-os [blinky example repository](https://developer.mbed.org/teams/mbed-os-examples/code/mbed-os-example-blinky/), and click the "Import into Compiler" button.
  ![import](img/import-compiler.png) 
  {: .card-text}

</div>
* * *
<div class="card-block">
#### Online 1b

  This is online 1b
  {: .card-text}

</div>
</div>
</div>


{: .card}
<div>
{: #offline-compile .collapse aria-labelledby="offline"}
<div>
{: .card-block}
<div>
#### Offline 1

  This is offline 1a
  {: .card-text}

</div>
</div>
</div>
</div>
<p></p>

{: .card}
<div>
{: .card-block}
  <div>
{: .card-title markdown="span"}
#### More options

{: style="text-align: center;"}
  <div>
{: .btn-group #stepX-selector role="group"}
  <div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-parent="#stepX" data-target="#stepX-option1" aria-controls="stepX-option1">Option 1</button>
    <button class="btn btn-outline-primary" type="button" data-toggle="collapse" data-parent="#stepX" data-target="#stepX-option2" aria-controls="stepX-option2">Option 2</button>
  {:/}
  </div>
</div>
</div>
</div>
<p></p>

{: #stepX aria-multiselectable="true"}
<div>
{: .card}
<div>
{: #stepX-option1 .collapse aria-labelledby="option1"}
<div>
{: .card-block}
<div>
#### Option 1a

  This is option 1a
  {: .card-text}

</div>
* * *
<div class="card-block">
#### Option 1b

  This is option 1b
  {: .card-text}

</div>
</div>
</div>


{: .card}
<div>
{: #stepX-option2 .collapse aria-labelledby="option2"}
<div>
{: .card-block}
<div>
#### Option 2a

  This is option 2a
  {: .card-text}

</div>
* * *
<div class="card-block">
#### Option 2b

  This is option 2b
  {: .card-text}

</div>
</div>
</div>
</div>
