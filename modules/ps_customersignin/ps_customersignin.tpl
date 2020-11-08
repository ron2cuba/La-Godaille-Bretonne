{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
  <div class="user-info dropdown js-dropdown">
  	<span class="user-info-title  expand-more _gray-darker" data-toggle="dropdown">
    <a href=""><i class="fas fa-user-circle account_link"></i></a>
    <span class="account_title">{l s='Mon compte' d='Shop.Theme.Global'}</span>
    {* <span class="account_subtitle">{l s='Register-Login' d='Shop.Theme.Global'}</span> *}
	</span>
    <ul class="dropdown-menu">
	{if $logged}
	  <li>
      <a
        class="account dropdown-item"
        href="{$my_account_url}"
        title="{l s='View my customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <span class="">{$customerName}</span>
      </a>
	  </li>
	   <li>
	  <a
        class="logout dropdown-item"
        href="{$logout_url}"
        rel="nofollow"
      >
        {l s='Sign out' d='Shop.Theme.Actions'}
      </a>
	  </li>
    {else}
      <li>
	  <a
        class="dropdown-item"
		href="{$my_account_url}"
        title="{l s='Log in to your customer account' d='Shop.Theme.Customeraccount'}"
        rel="nofollow"
      >
        <span>{l s='Sign in' d='Shop.Theme.Actions'}</span>
      </a>
	  </li>
    {/if}
	</ul>
  </div>