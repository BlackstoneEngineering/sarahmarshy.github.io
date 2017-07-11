{::options auto_ids="true" /}
{::options parse_block_html="true" /}

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
    <button class="btn btn-outline-primary" style="cursor: pointer" type="button" 
      data-toggle="collapse" data-parent="#compile" data-target="#online-compile" 
      aria-controls="online-compile">Online</button>
    <button class="btn btn-outline-primary" style="cursor: pointer" type="button" 
      data-toggle="collapse" data-parent="#compile" data-target="#offline-compile" 
      aria-controls="offline-compile">Offline</button>
  {:/}
  </div>
</div>
</div>
</div>
<p></p>

{: #compile aria-multiselectable="true"}
<div>

{% include online.md %}

{% include offline.md %}

</div>
<p></p>