<h2><a href="https://leetcode.com/problems/valid-number/">65. Valid Number</a></h2><h3>Hard</h3><hr><div><p>Given a string <code>s</code>, return whether <code>s</code> is a <strong>valid number</strong>.<br>
<br>
For example, all the following are valid numbers: <code>"2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"</code>, while the following are not valid numbers: <code>"abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"</code>.</p>

<p>Formally, a&nbsp;<strong>valid number</strong> is defined using one of the following definitions:</p>

<ol>
	<li>An <strong>integer number</strong> followed by an <strong>optional exponent</strong>.</li>
	<li>A <strong>decimal number</strong> followed by an <strong>optional exponent</strong>.</li>
</ol>

<p>An <strong>integer number</strong> is defined with an <strong>optional sign</strong> <code>'-'</code> or <code>'+'</code> followed by <strong>digits</strong>.</p>

<p>A <strong>decimal number</strong> is defined with an <strong>optional sign</strong> <code>'-'</code> or <code>'+'</code> followed by one of the following definitions:</p>

<ol>
	<li><strong>Digits</strong> followed by a <strong>dot</strong> <code>'.'</code>.</li>
	<li><strong>Digits</strong> followed by a <strong>dot</strong> <code>'.'</code> followed by <strong>digits</strong>.</li>
	<li>A <strong>dot</strong> <code>'.'</code> followed by <strong>digits</strong>.</li>
</ol>

<p>An <strong>exponent</strong> is defined with an <strong>exponent notation</strong> <code>'e'</code> or <code>'E'</code> followed by an <strong>integer number</strong>.</p>

<p>The <strong>digits</strong> are defined as one or more digits.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "0"</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "e"</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = "."</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 20</code></li>
	<li><code>s</code> consists of only English letters (both uppercase and lowercase), digits (<code>0-9</code>), plus <code>'+'</code>, minus <code>'-'</code>, or dot <code>'.'</code>.</li>
</ul>
</div>