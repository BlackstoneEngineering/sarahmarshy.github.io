{::options auto_ids="true" /}
{::options parse_block_html="true" /}

{: #offline-compile .collapse }
<div>

## Offline

{: style="text-align: center;"}
<div>
{: .btn-group #offline-choose-os role="group"}
  <div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#offline-os" data-target="#offline-windows" 
      aria-controls="offline-windows">Windows</button>
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#offline-os" data-target="#offline-linux" 
      aria-controls="offline-linux">Linux</button>
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#offline-os" data-target="#offline-mac" 
      aria-controls="offline-mac">Mac</button>
  {:/}
  </div>
</div>

<p></p>

{: #offline-os aria-multiselectable="true" }
<div>

{% include offline-windows.md %}

{% include offline-linux.md %}

{% include offline-mac.md %}

{: style="text-align: center;"}
<div>
  {::nomarkdown}
    <button class="btn btn-outline-primary" type="button" 
      data-toggle="collapse" data-parent="#blinky" data-target="#blinky-offline" 
      aria-controls="blinky-offline">Next: Create your first program</button>
  {:/}
</div>

</div>
