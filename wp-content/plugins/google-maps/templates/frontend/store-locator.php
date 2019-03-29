<?php
/**
 * @var $map Hugeit_Maps_Map
 */
?>
<div id="locatorBox_<?php echo $map->get_id(); ?>" class="locatorBox">
    <input type="text" id="searchLocator_<?php echo $map->get_id(); ?>" class="searchLocator"
           name="searchLocator" maxlength="250"
           placeholder="Enter your location "
           value="<?php echo $map->get_locator_default_address();?>"
    >
    <select name="locatorRadius" id="locatorRadius_<?php echo $map->get_id(); ?>" class="locatorRadius">
        <option value="100000">No Limitation</option>
        <option value="200">200kms</option>
        <option value="100">100kms</option>
        <option value="50">50kms</option>
        <option value="30">30kms</option>
        <option value="20">20kms</option>
        <option value="10">10kms</option>
    </select>
    <input type="submit" value="Search" id="submitLocator_<?php echo $map->get_id(); ?>" class="submitLocator">
</div>
