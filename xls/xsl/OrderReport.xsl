<?xml version="1.0"?> 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">

    <table id="menuTable" class="table" style="width:700px">
        <thead>
            <tr>
                <th style="width:1%"></th>
                <th style="width:60%">Menu Options</th>
                <th class="text-center" style="width:10%">Price</th>
                <th class="text-center" style="width:10%">Quantity</th>
            </tr>
        </thead>
        <tbody>
            <xsl:for-each select="//section">
                <tr>
                    <td colspan="4">
                        <b><xsl:value-of select="@name" /></b>
                    </td>
                </tr>
                <xsl:for-each select="entry">
                    <tr id="{position()}">
                        <xsl:attribute name="vegetarian">
                            <xsl:value-of select="boolean(@vegetarian)" />
                        </xsl:attribute>
                        <td align="center">
                            <br/>
                        </td>
                        <td>
                            <xsl:value-of select="item" />
                        </td>
                        <td align="right">
                            € <xsl:value-of select="price" />
                        </td>
                        <td align="center">
                            <input type="number" value="0" min="0" step="1" style="width: 45px">
                        </td>
                    </tr>
                </xsl:for-each>
            </xsl:for-each>
        </tbody>
    </table>
        
</xsl:template>
</xsl:stylesheet>